const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('Auth route works!');
});

module.exports = router;
