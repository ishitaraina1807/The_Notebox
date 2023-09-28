const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//ceate a user using: POST "/api/auth/createuser". Doesn't require auth

router.post('/createuser', [
  body('email' , 'Enter a valid email').isEmail(),
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('password', 'Minimum length of password should be 5').isLength({ min: 5 })
], async (req, res) => {
  //error: throws error -> bad request 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    //check whether the user with this email exists already
    try {
    let user = await User.findOne({email: req.body.email});
    if (user) {
      return res.status(400).json({error: "Sorry a user with this email already exists"});
    }
      user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.json(user);
  } 
  
  catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;







