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
const bcrypt = require("bcryptjs");
const userModel = require("./utils/SignUpModels");
const APImodel = require("./utils/addAPImodel");
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
 const use =  await userModel.findOne({ email })
    if (use) {
       response.status(400).json({ message: "user already exists" });
    }
    
    else {
      
      const user = {
        userName: request.body.userName,
        email: request.body.email,

        password: request.body.password,
        cpassword:request.body.cpassword ,
      };
      console.log(user);
      const signedUpUser = new userModel(user);
      const hashed = await bcrypt.hash(request.body.password,10)
      if(hashed)
      {
        user.password = hashed
        user.cpassword = hashed
        console.log('hashed',hashed)
      }
      console.log(user.password)


      await signedUpUser.save();
      console.log(user.password)
      response.status(201).json(user);
      console.log(user);
    }
  });

app.post("/signup/login", (request, response) => {

  const {email,password} = request.body;
  //console.log( request.body)
    userModel.findOne({email},async function(err, found ){
      console.log(err)
      
      console.log(password)
    
      if(!err){
            if(!found)
            {
        console.log('hi')
        response.status(401).json({message :'user is not registered'})
            }
            else{
              console.log(found)
        //const compare= await bcrypt.compare(password,found.password)
        //console.log(compare)
            if(password!=found.password)
             {
              response.status(403).json({message:'incorrect password'})
             }
             else{
              response.status(200).json(found)
             }
            }

         
    }
    
    else{
     console.log(err)
    }  
      })
   
   
   
    
    })


app.post("/upload", (req, res) => {
  console.log(req.body)
  const  image  = req.body.sending
  console.log(req.body)

  
  const formDa = new FormData();
  formDa.append("size", "auto");
 
  formDa.append("image_file_b64", image);
  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formDa,
   //responseType: "arraybuffer",
    headers: {
      ...formDa.getHeaders(),
      "X-Api-Key": "arHHviRtutxFQoWfxaWxzEZJ",
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

app.post("/addAPI",async (req,res) => {
  const {name,endpoint,description} = req.body
  const apiCheck = await APImodel.findOne({name})
  if (apiCheck) {
    res.status(400).json({ message: "api already exists" });
 } 
 else{
   const api = {name,endpoint,description}
   const addAPI = new APImodel(api);
   await addAPI.save();
   res.status(201).json(api);
   console.log(api);
 
}})


app.listen(process.env.PORT, () => {
  console.log("Backend server has started at " + process.env.PORT);
});








// if(user)
//    {
//      response.send().json({me:'k'})
//    }
//    else{
//      const compare= bcrypt.compare(password,user.password)
//      if(compare)
//      {
//       response.send().json({me:'incorrect password'})
//      }
//      else{
//       response.send().json({me:'valid'})
//      }