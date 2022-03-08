const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userModel = require("./utils/SignUpModels");
dotenv.config();

app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb has started");
  })
  .catch((err) => {
    console.log("error connecting to the database" + err);
  });
app.get("/signin", (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/signup", async (request, response) => {
  const user = request.body;
  const signedUpUser = new userModel(user);
  await signedUpUser.save();
  response.json(user);
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});
