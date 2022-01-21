const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb has started");
  })
  .catch((err) => {
    console.log("error connecting to the database" + err);
  });

/*something about app has to be written here*/
app.get("/hello-world", (req, res) => {
  res.send("hello  dear  world");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});
