const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { orderModel } = require('../mongodb');
require('dotenv').config();

const router = express.Router();

function generateUserId() {
  const timestamp = Date.now().toString().slice(-6); 
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `JP${timestamp}${random}`;
}

router.post('/', authenticateToken, async(req, res) => {
  try {
    const { cart, paymentDetails } = req.body;
    const user = req.user;
    if (!cart || cart.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }
    if (cart.length > 1) {
      return res.status(400).json({ message: 'You can only purchase one plan at a time.' });
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const planDetails = cart[0]; 

    const existingOrder = await orderModel.findOne({
      userEmail: user.email,
      status: { $in: ['active', 'completed'] }
    });

    if (existingOrder) {
      return res.status(400).json({
        message: 'You have already purchased a membership. Please check your existing membership in "My Membership" section.',
        hasExistingMembership: true
      });
    }

    // Generate unique user ID
    let userId;
    let isUnique = false;
    let attempts = 0;

    while (!isUnique && attempts < 10) {
      userId = generateUserId();
      const existingOrder = await orderModel.findOne({ userId });
      if (!existingOrder) {
        isUnique = true;
      }
      attempts++;
    }

    if (!isUnique) {
      return res.status(500).json({ message: 'Unable to generate unique user ID' });
    }

    // Calculate end date
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1); // Default 1 month duration

    // Create order record
    const orderData = {
      userId: userId,
      userEmail: user.email,
      fullName: paymentDetails.fullName,
      planName: planDetails.name,
      planStartDate: startDate,
      planDuration: 1, // Default 1 month
      planEndDate: endDate,
      totalAmount: total,
      paymentMethod: paymentDetails.paymentMethod,
      status: 'active'
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    return res.json({
      message: 'Checkout processed successfully! Welcome to JP FitZone!',
      total,
      paymentDetails,
      userId: userId,
      orderData: orderData,
      status: 'completed'
    });

  } catch (error) {
    console.error('Checkout error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

module.exports = router
