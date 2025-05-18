const mongoose = require('mongoose');

const beneficiarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  goal: { type: String },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Beneficiary', beneficiarySchema);
