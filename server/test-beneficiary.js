const mongoose = require('mongoose');
const Beneficiary = require('./models/Beneficiary');
require('dotenv').config();

async function addTestBeneficiary() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');

    const beneficiary = new Beneficiary({
      name: 'Child Education Fund',
      description: 'Supports education for underprivileged children',
    });
    await beneficiary.save();
    console.log('Test Beneficiary Added:', beneficiary._id);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}
addTestBeneficiary();