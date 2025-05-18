const express = require('express');
const router = express.Router(); // THIS initializes the router!

// Route to get beneficiary list
router.get('/', (req, res) => {
  res.json([
    {
      name: "Anaya",
      age: 10,
      goal: "Doctor",
      image: "https://source.unsplash.com/400x300/?girl,child,portrait"
    },
    {
      name: "Ishita",
      age: 12,
      goal: "Engineer",
      image: "https://source.unsplash.com/400x300/?girl,india,school"
    },
    {
      name: "Mehak",
      age: 14,
      goal: "Artist",
      image: "https://source.unsplash.com/400x300/?girl,painting"
    }
  ]);
});

module.exports = router; // Needed to use this route in app.js
