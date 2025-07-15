const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.post('/create-order', donationController.createOrder);
router.post('/verify-payment', donationController.verifyPayment);
router.post('/payment-auth', donationController.paymentAuth);
router.post('/webhook', donationController.webhook);

module.exports = router;