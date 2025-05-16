const express = require('express');
const router = express.Router();

console.log("✅ donationRoutes.js loaded");

router.get('/ping', (req, res) => {
  res.send('Donation route works!');
});

module.exports = router;
