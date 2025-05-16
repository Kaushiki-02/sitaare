const express = require('express');
const router = express.Router();

// TEMP TEST ROUTE
router.get('/ping', (req, res) => {
  res.send('Donation route works!');
});

module.exports = router;
