const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: { type: String },
  donorEmail: { type: String },
  donorPhone: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  donationType: { type: String, enum: ['one-time', 'monthly', 'in-kind'], default: 'one-time' },
  
  // Razorpay payment details
  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
  razorpaySignature: { type: String },
  
  // Payment status
  status: { 
    type: String, 
    enum: ['pending', 'completed', 'failed', 'refunded'], 
    default: 'pending' 
  },
  
  // Additional details
  description: { type: String },
  anonymous: { type: Boolean, default: false },
  
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
