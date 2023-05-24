const myJwt = require('jsonwebtoken');

const mySecret = 'mysecretsshhhhh';
const myExpiration = '2h';

module.exports = {
  myAuthMiddleware: function ({ req }) {
    let myToken = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      myToken = myToken.split(' ').pop().trim();
    }

    if (!myToken) {
      return req;
    }

    try {
      const { data } = myJwt.verify(myToken, mySecret, { expiresIn: myExpiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  mySignToken: function ({ firstName, email, _id }) {
    const myPayload = { firstName, email, _id };

    return myJwt.sign({ data: myPayload }, mySecret, { expiresIn: myExpiration });
  },
};
