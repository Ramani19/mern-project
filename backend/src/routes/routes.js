/* eslint-disable prettier/prettier */
//const  response = require("express");
const express = require("express");
const user = require("../controllers/User");
const api = require("../controllers/api")
const router = express.Router();


//user routes
router.route("/signup", user.signup);
router.route("/signup/login", user.login);

//api routes
 
router.route("/upload",api.upload)
router.route("/addAPI",api.addAPI)
router.route("/findAPI",api.findAPI)
router.route("/findSpecificAPI",api.findSpecificAPI)

module.exports = router;
