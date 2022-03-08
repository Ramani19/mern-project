//const  response = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");



router.post("/signup", async (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    email: request.body.email,
    password: request.body.password,
  });
  await signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
