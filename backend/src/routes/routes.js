const { response } = require("express");
const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../utils/SignUpModels");

router.post("/signup", (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.get("/signin");

module.exports = router;
