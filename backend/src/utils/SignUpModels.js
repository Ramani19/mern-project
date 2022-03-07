const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("mytable", signUpTemplate);
module.exports = userModel;
