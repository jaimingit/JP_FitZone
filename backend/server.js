const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const plansRoutes = require('./routes/plans');
const checkoutRoutes = require('./routes/checkout');
const ordersRoutes = require('./routes/orders');

const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: '*'
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/plans', plansRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/orders', ordersRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'JP FitZone Backend is running' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
