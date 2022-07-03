/* eslint-disable prettier/prettier */
const APImodel = require("../models/addAPImodel");
const userModel = require("../models/SignUpModels")
const axios = require("axios")
const FormData = require("form-data");

const upload = (req, res) => {
  console.log(req.body);
  const image = req.body.sending;
  console.log(req.body);

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
      "X-Api-Key": "oRRJw46re7o5kvZsTRP7UiD1",
      Accept: "application/json",
    },
    encoding: null,
  })
    .then((response) => {
      if (response.status != 200) return;
      // console.error("Error:", response.status, response.statusText);
      console.error("failed");

      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      return console.error("Request failed:", error);
    });
};

const addAPI = async (req,res) => {
    const {name,endpoint,description,email} = req.body
    const userDetails = await userModel.findOne({email})
    const user = userDetails._id
    
    const apiCheck = await APImodel.findOne({name,user})
    if (apiCheck) {
      res.status(400).json({ message: "api name already exists" });
   } 
   else{
     const api = {name,endpoint,description,user}
     const addAPI = new APImodel(api);
     await addAPI.save();
     console.log(addAPI)
     res.status(200).json('success')
  } 
  
   
  }

const editAPI = async (req, res) => {
  const {name,endpoint,description,newName} = req.body
  console.log(name)
  console.log(newName)
  // const api = await APImodel.findOne({name})
  // const id = api._id
  // console.log(api)
  const update = {name:newName, endpoint, description}
  const updatedAPI = await APImodel.findOneAndUpdate({name}, update)
  if(updatedAPI)
  console.log(updatedAPI)
  res.json('succsess')

}

  const findAPI = async (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const {email} = req.body
    const user = await userModel.findOne({email: email})
    const userId = user._id
    
    if(userId){
    const allAPI = await APImodel.find({user : userId})
     res.status(201).json(allAPI);
     
    }
    else{
      res.json({msg :"user doesnot exist"})
    }
  }
  const findSpecificAPI = async (req, res) => {
     const {name} = req.body
     const requiredAPI = await APImodel.findOne({name : name})
     if(requiredAPI)
      res.json(requiredAPI)
      else
        res.send('hh')
  }
  const delAPI =  async (req, res) => {
    const {name} = req.body
    console.log(name)
   const del = await APImodel.findOneAndRemove({name : name})
   console.log(del)
   
   
  
  res.send('ji')
  }
  



module.exports.upload = upload
module.exports.addAPI = addAPI
module.exports.findAPI = findAPI
module.exports.findSpecificAPI = findSpecificAPI
module.exports.delAPI=delAPI
module.exports.editAPI=editAPI