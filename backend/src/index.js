/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

const express = require("express");
const app = express();



const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes/routes")




const bodyParser = require("body-parser");
dotenv.config();
app.use('/', routes)
app.use(express.json());
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
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
  })



app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
 
});








