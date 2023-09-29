const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//ceate a user using: POST "/api/auth/createuser". Doesn"t require auth

router.post("/createuser", [
  body("email", "Enter a valid email").isEmail(),
  body("name", "Enter a valid name").isLength({ min: 3 }),
  body("password", "Minimum length of password should be 5").isLength({ min: 5 })
], async (req, res) => {
  //error: throws error -> bad request 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };
  //check whether the user with this email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" });
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);
    //Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });

    // Define your secret key
    const jwt_secret_key = "secret";

    //returning the json web token
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, jwt_secret_key);

    // res.json(user);
    res.json({ authToken });
  }
  //catching errors
  catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;







