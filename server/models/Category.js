const myDatabase = require('mongoose');

const { Schema } = myDatabase;

const myCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const MyCategory = myDatabase.model('Category', myCategorySchema);

module.exports = MyCategory;
