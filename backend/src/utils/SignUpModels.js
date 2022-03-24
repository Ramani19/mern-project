/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const bct = require("bcryptjs");

const signUpTemplate = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

   
  
  
 

const userModel = mongoose.model("mytable", signUpTemplate);
module.exports = userModel;
