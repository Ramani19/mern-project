/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

const express = require("express");
const app = express();



const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes/routes")

const path = require('path')


const bodyParser = require("body-parser");
dotenv.config();

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
  .connect(process.env.MONGODB_URL )
  .then(() => {
    console.log("mongodb has started");
  })
  .catch((err) => {
    console.log("error connecting to the database" + err);
  })

  app.use('/', routes)
  if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
  }
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend' , 'build', 'index.html'))

  })

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend server has started ");
 
});








