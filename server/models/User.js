const myDatabase = require('mongoose');
const { Schema } = myDatabase;
const myBcrypt = require('bcrypt');
const MyOrder = require('./Order');

const myUserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  orders: [MyOrder.schema]
});


myUserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await myBcrypt.hash(this.password, saltRounds);
  }

  next();
});


myUserSchema.methods.isCorrectPassword = async function(password) {
  return await myBcrypt.compare(password, this.password);
};

const MyUser = myDatabase.model('User', myUserSchema);

module.exports = MyUser;
