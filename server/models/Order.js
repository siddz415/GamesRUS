const myDatabase = require('mongoose');

const { Schema } = myDatabase;

const myOrderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const MyOrder = myDatabase.model('Order', myOrderSchema);

module.exports = MyOrder;
