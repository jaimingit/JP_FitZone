const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { model } = require('../mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
const router = express.Router();

let isConnected = false;
const connectToMongoDB = async () => {

  try {
    if (isConnected) {
      return;
    }

    if (!mongoUrl || mongoUrl === 'undefined' || mongoUrl.trim() === '') {
      throw new Error('MongoDB URL is not defined or invalid. Please set MONGO_URL in your .env file.');
    }

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;
    console.log("✅ Connected to MongoDB successfully");

    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
      isConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
      isConnected = false;
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    isConnected = false;
    throw error;
  }
};

const closeMongoDBConnection = () => {
  if (isConnected) {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      isConnected = false;
    });
  }
router.use(async (req, res, next) => {
  try {
    await connectToMongoDB();
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Database connection failed',
      error: error.message
    });
  }
});
}
// Register
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await model.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in MongoDB
    const newUser = new model({
      fullname: fullName,
      email: email,
      password: hashedPassword
    });

    await newUser.save();

    // Generate token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: newUser._id, fullName: newUser.fullname, email: newUser.email }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in MongoDB
    const user = await model.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: 'User not found. Please register first before logging in.',
        action: 'register',
        suggestion: 'Click the "Sign up" link to create a new account'
      });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        message: 'Invalid password. Please check your password and try again.',
        action: 'retry',
        suggestion: 'Make sure you entered the correct password for this email address'
      });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    console.log(`✅ User ${user.fullname} logged in successfully`);
    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, fullName: user.fullname, email: user.email }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
