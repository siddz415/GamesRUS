const { UnauthorizedError } = require('apollo-server-express');
const { MyUser, MyProduct, MyCategory, MyOrder } = require('../models');
const { generateAuthToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const myResolvers = {
  Query: {
    categories: async () => {
      return await MyCategory.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await MyProduct.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await MyProduct.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await MyUser.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new UnauthorizedError('Not authorized');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await MyUser.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new UnauthorizedError('Not authorized');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new MyOrder({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await MyUser.create(args);
      const token = generateAuthToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new MyOrder({ products });

        await MyUser.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new UnauthorizedError('Not authorized');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await MyUser.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new UnauthorizedError('Not authorized');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await MyProduct.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await MyUser.findOne({ email });

      if (!user) {
        throw new UnauthorizedError('Invalid credentials');
      }

      const validPassword = await user.isValidPassword(password);

      if (!validPassword) {
        throw new UnauthorizedError('Invalid credentials');
      }

      const token = generateAuthToken(user);

      return { token, user };
    }
  }
};

module.exports = myResolvers;
