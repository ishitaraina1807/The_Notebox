const express = require('express');
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/notes");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get all the notes of the user: GET "/fetchnotes". Login required
router.get('/fetchnotes', fetchUser, async (req, res) => {
  try {
    //create a new note
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// ROUTE 2: Add new notes of the user: POST "/addnotes". Login required
router.post('/addnotes', [
  body("title", "Enter a valid title").isLength({ min: 3 }),
  body("description", "Description must be at least 5 characters").isLength({ min: 5 }),
], fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newNote = new Notes({
      title: req.body.title,
      description: req.body.description,
      tag: req.body.tag,
      user: req.user.id
    });
//save the note to the database
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
