const mongoose = require("mongoose");
const APIschema = new mongoose.Schema({
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
