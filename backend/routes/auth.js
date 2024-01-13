const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");


//ROUTE 1:ceate a user using: POST "/api/auth/createuser". Doesn"t require auth

router.post("/createuser", [
  body("email", "Enter a valid email").isEmail(),
  body("name", "Enter a valid name").isLength({ min: 3 }),
  body("password", "Minimum length of password should be 5").isLength({ min: 5 })
], async (req, res) => {
  let success = false;
  //error: throws error -> bad request 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  };
  //check whether the user with this email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "Sorry a user with this email already exists" });
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
    success = true;
    res.json({ success,  authToken });
  }
  //catching errors
  catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

//ROUTE 2: autheticate a user using: POST "/api/auth/login". No login required

router.post("/login", [
body("email", "Enter a valid email").isEmail(),
body("password", "Password Cannot be blank").exists()
], async (req, res) => {
  let success = false;
//error: throws error -> bad request 
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
};
const { email, password } = req.body;
try {
  let user = await User.findOne({ email });
  if (!user) {
    success = false;
    return res.status(400).json({ success, error: "Please try to login with correct credentials" });
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
      success = false;
    return res.status(400).json({success,  error: "Please try to login with correct credentials" });
  }
  // Define your secret key
  const data = {
    user: {
      id: user.id
    }
  }
  const jwt_secret_key = "secret";
  //returning the json web token
  const authToken = jwt.sign(data, jwt_secret_key);
  const success = true;
  res.json({ success, authToken });
}
catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
});

//ROUTE 3: Get loggedin user details using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchUser,  async (req, res) => {
try {
  const userid = req.user.id;
  const user = await User.findById(req.user.id).select("password");
  res.send(user);
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
});
module.exports = router;

