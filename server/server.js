const myExpress = require('express');
const { ApolloServer } = require('apollo-server-express');
const myPath = require('path');
const { myAuthMiddleware } = require('./utils/auth');

const { myTypeDefs, myResolvers } = require('./schemas');
const myDB = require('./config/connection');

const myPORT = process.env.PORT || 3001;
const myApp = myExpress();
const myServer = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
  context: myAuthMiddleware,
});

myApp.use(myExpress.urlencoded({ extended: false }));
myApp.use(myExpress.json());


myApp.use('/images', myExpress.static(myPath.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  myApp.use(myExpress.static(myPath.join(__dirname, '../client/build')));
}

myApp.get('/', (req, res) => {
  res.sendFile(myPath.join(__dirname, '../client/build/index.html'));
});


const startMyApolloServer = async () => {
  await myServer.start();
  myServer.applyMiddleware({ app: myApp });
  
  myDB.once('open', () => {
    myApp.listen(myPORT, () => {
      console.log(`API server running on port ${myPORT}!`);
      console.log(`Use GraphQL at http://localhost:${myPORT}${myServer.graphqlPath}`);
    })
  })
};


startMyApolloServer();
