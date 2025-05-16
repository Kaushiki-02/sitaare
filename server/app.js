const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Import routes
const beneficiaryRoutes = require('./routes/beneficiaryRoutes');
const donationRoutes = require('./routes/donationRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
console.log("Loading beneficiaryRoutes...");
app.use('/api/beneficiaries', require('./routes/beneficiaryRoutes'));

console.log("Loading donationRoutes...");
app.use('/api/donate', require('./routes/donationRoutes'));

console.log("Loading authRoutes...");
app.use('/api/auth', require('./routes/authRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/', (req, res) => {
  res.send('🚀 Backend is running!');
});
