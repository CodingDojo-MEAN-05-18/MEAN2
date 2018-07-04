const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'provide a book title'],
      trim: true,
    },
    pages: {
      type: Number,
      min: 1,
      required: true,
    },
    publisher: String,
    year: Number,
    author: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', bookSchema);
