const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Donation = require('../models/Donation');
const router = express.Router();

// Test route to check if the server is working
router.get('/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Donation routes are working',
    timestamp: new Date().toISOString()
  });
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create order
router.post('/create-order', async (req, res) => {
  console.log('Create order request received:', req.body);
  
  const { amount, currency = 'INR', donorName, donorEmail, donorPhone, description, anonymous = false } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ success: false, error: "Invalid amount" });
  }

  // Check if Razorpay credentials are configured
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error('Razorpay credentials not configured');
    return res.status(500).json({ 
      success: false, 
      error: "Payment gateway not configured. Please check server configuration." 
    });
  }

  const options = {
    amount: amount * 100, // Razorpay expects paise
    currency: currency,
    receipt: `receipt_order_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
  };

  console.log('Creating Razorpay order with options:', options);

  try {
    const order = await razorpay.orders.create(options);
    console.log('Razorpay order created:', order.id);
    
    // Create donation record in database
    const donation = new Donation({
      donorName: donorName || '',
      donorEmail: donorEmail || '',
      donorPhone: donorPhone || '',
      amount: amount,
      currency: currency,
      description: description || '',
      anonymous: anonymous,
      razorpayOrderId: order.id,
      status: 'pending'
    });
    
    await donation.save();
    console.log('Donation record saved:', donation._id);
    
    res.json({ 
      success: true, 
      order,
      key_id: process.env.RAZORPAY_KEY_ID, // Send key_id to frontend
      donationId: donation._id
    });
  } catch (err) {
    console.error('Razorpay order creation error:', err);
    console.error('Error details:', {
      message: err.message,
      code: err.code,
      statusCode: err.statusCode,
      error: err.error
    });
    
    // Provide more specific error messages
    let errorMessage = "Order creation failed";
    if (err.error && err.error.description) {
      errorMessage = err.error.description;
    } else if (err.message) {
      errorMessage = err.message;
    }
    
    res.status(500).json({ 
      success: false, 
      error: errorMessage,
      details: err.message 
    });
  }
});

// Verify payment
router.post('/verify-payment', async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, error: "Missing payment details" });
  }

  try {
    // Verify the payment signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Payment is verified - update donation record
      if (donationId) {
        await Donation.findByIdAndUpdate(donationId, {
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
          status: 'completed'
        });
      }
      
      res.json({ 
        success: true, 
        message: "Payment verified successfully",
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id
      });
    } else {
      // Update donation status to failed
      if (donationId) {
        await Donation.findByIdAndUpdate(donationId, {
          status: 'failed'
        });
      }
      
      res.status(400).json({ success: false, error: "Invalid payment signature" });
    }
  } catch (err) {
    console.error('Payment verification error:', err);
    res.status(500).json({ success: false, error: "Payment verification failed" });
  }
});

// Get all donations (for admin)
router.get('/all', async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json({ success: true, donations });
  } catch (err) {
    console.error('Fetch donations error:', err);
    res.status(500).json({ success: false, error: "Failed to fetch donations" });
  }
});

// Get donation statistics
router.get('/stats', async (req, res) => {
  try {
    const totalDonations = await Donation.countDocuments({ status: 'completed' });
    const totalAmount = await Donation.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    
    res.json({ 
      success: true, 
      stats: {
        totalDonations,
        totalAmount: totalAmount[0]?.total || 0
      }
    });
  } catch (err) {
    console.error('Stats error:', err);
    res.status(500).json({ success: false, error: "Failed to fetch statistics" });
  }
});

// Get payment details
router.get('/payment/:paymentId', async (req, res) => {
  try {
    const payment = await razorpay.payments.fetch(req.params.paymentId);
    res.json({ success: true, payment });
  } catch (err) {
    console.error('Payment fetch error:', err);
    res.status(500).json({ success: false, error: "Failed to fetch payment details" });
  }
});

module.exports = router;
