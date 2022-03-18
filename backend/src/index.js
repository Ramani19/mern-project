/* eslint-disable prettier/prettier */
const express = require("express");
const app = express();
const FormData = require("form-data");
const axios = require("axios");
// const http = require("http");
// const httpServer = http.createServer();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const userModel = require("./utils/SignUpModels");
//const { response } = require("express");
const bodyParser = require("body-parser");
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//httpServer.on(`listening on port ${httpServer.address.port}`);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb has started");
  })
  .catch((err) => {
    console.log("error connecting to the database" + err);
  });

app.post("/signup", async (request, response) => {
  const email = request.body.email;
  await userModel.findOne({ email }).then((use) => {
    if (use) {
      return response.status(400).json({ message: "user alresdy exists" });
    } else {
      const hashedPassword = bcrypt.hash(request.body.password, 10);
      const user = {
        userName: request.body.userName,
        email: request.body.email,

        password: hashedPassword,
        cpassword: hashedPassword,
      };
      console.log(user);
      const signedUpUser = new userModel(user);
      signedUpUser.save();
      response.status(201).json(user);
      console.log(user);
    }
  });
});
app.post("/signup/login", async (request, response) => {

  const email = request.body.email;
  //console.log( request.body)
  await userModel.findOne({ email }).then((use) => {
    if (!use) {
      console.log(response.status(400).json({ message: "cannot find user" }));
      return response.status(400).json({ message: "cannot find user" });
    }
    try {
      bcrypt.compare(request.body.password, use.password).then((isMatch) => {
        if (isMatch) return response.status(201).send();
        else {
          return response
            .status(403)
            .send({ message: "enter correct password" });
        }
      });
    } catch {
      response.status(500).send;
    }
  });
});
// http.createServer(onRequest).listen(9000, "192.168.119.119");
app.post("/upload", (req, res) => {
  const image = req.file.buffer
  

  // const imageData = image.substring(image.indexOf(",") + 1);
  const formDa = new FormData();
  formDa.append("size", "auto");
 
  formDa.append("image_file_b64", image);
  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formDa,
    responseType: "arraybuffer",
    headers: {
      ...formDa.getHeaders(),
      "X-Api-Key": "6h1jcLkh6emDQEvJP4UNtXCT",
      Accept: "application/json",
    },
    encoding: null,
  })
    .then((response) => {
      if (response.status != 200)
        return console.error("Error:", response.status, response.statusText);
         console.log(response.data)
        res.json(response.data);

      
    })
    .catch((error) => {
      return console.error("Request failed:", error);
    });
  // .then((response) => {
  //   return res.status(200).json({
  //     image: response.data.data.result_b64,
  //   });
  // })
  // .catch((error) => {
  //   return console.error("Request Failed" + error);
  // });
});
app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});
