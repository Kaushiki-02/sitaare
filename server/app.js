require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://sitaare.vercel.app'],
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// Log environment variables for debugging
console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);
console.log('RAZORPAY_KEY_SECRET:', process.env.RAZORPAY_KEY_SECRET);
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Import routes
const beneficiaryRoutes = require('./routes/beneficiaryRoutes');
const donationRoutes = require('./routes/donationRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
console.log("Loading beneficiaryRoutes...");
app.use('/api/beneficiaries', beneficiaryRoutes);

console.log("Loading donationRoutes...");
app.use('/api/donate', donationRoutes);

console.log("Loading authRoutes...");
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('This is the backend server. Please visit our frontend at https://sitaare.vercel.app');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));