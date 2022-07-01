/* eslint-disable prettier/prettier */

const bcrypt = require("bcryptjs");
const userModel = require("../models/SignUpModels")

const signup = async (request, response) => {
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
    };

    module.exports.signup= signup