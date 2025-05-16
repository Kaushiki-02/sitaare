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
app.use('/api/beneficiaries', beneficiaryRoutes);
app.use('/api/donate', donationRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/', (req, res) => {
  res.send('🚀 Backend is running!');
});
