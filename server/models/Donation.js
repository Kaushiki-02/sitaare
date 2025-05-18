const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: { type: String },
  donorEmail: { type: String },
  amount: { type: Number, required: true },
  donationType: { type: String, enum: ['one-time', 'monthly', 'in-kind'], default: 'one-time' },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
