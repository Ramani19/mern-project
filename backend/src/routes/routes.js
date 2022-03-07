//const  response = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const signUpTemplateCopy = require("../utils/SignUpModels");
app.use(express.json());
router.get("/signin", (req, res) => {
  signUpTemplateCopy.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

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
