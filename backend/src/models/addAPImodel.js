const mongoose = require("mongoose");
const SignUpModels = require("./SignUpModels");

const APIschema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: SignUpModels,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  endpoint: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const APImodel = mongoose.model("myAPIs", APIschema);
module.exports = APImodel;
