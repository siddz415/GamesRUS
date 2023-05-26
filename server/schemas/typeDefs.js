const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Game {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    games: [Game]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    games(category: ID, name: String): [Game]
    game(_id: ID!): Game
    user: User
    order(_id: ID!): Order
    checkout(games: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(games: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateGame(_id: ID!, quantity: Int!): Game
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
