const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator == value) {
        throw new Error("Invalid name");
      }
    },
  },

  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },

  age: {
    type: Number,
    required: true,
    min: 18,
    validate(value) {
      if (!validator == value) {
        throw new Error("Invalid age");
      }
    },
  },

  bookName: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator == value) {
        throw new error("Invalid bookName");
      }
    },
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },

  mobileNumber: {
    type: String,
    required: true,
    trim: true,
  },
});

const Author = new mongoose.model("Author", authorSchema);

module.exports = Author;
