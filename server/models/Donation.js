const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  beneficiaryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Beneficiary',
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  donorName: {
    type: String,
    default: 'Anonymous',
  },
  donorEmail: {
    type: String,
    default: '',
  },
  donorPhone: {
    type: String,
    default: '',
  },
  paymentId: {
    type: String,
    required: true,
    unique: true,
  },
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Donation', donationSchema);