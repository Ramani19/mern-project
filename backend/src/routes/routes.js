/* eslint-disable prettier/prettier */
//const  response = require("express");
const express = require("express");
const user = require("../controllers/User");
const api = require("../controllers/api")
const router = express.Router();


//user routes
router.route("/signup").post(user.signup);
router.route("/signup/login").post(user.login);

//api routes
 
router.route("/upload").post(api.upload)
router.route("/addAPI").post(api.addAPI)
router.route("/findAPI").post(api.findAPI)
router.route("/findSpecificAPI").post(api.findSpecificAPI)
router.route("/delAPI").post(api.delAPI)
router.route("/editAPI").post(api.editAPI)

module.exports = router;
