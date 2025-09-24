const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { orderModel } = require('../mongodb');

const router = express.Router();

// Get membership data for logged-in user
router.get('/membership', authenticateToken, async (req, res) => {
  try {
    const user = req.user; // From auth middleware

    const membership = await orderModel.findOne({ userEmail: user.email, status: 'active' });

    if (!membership) {
      return res.status(404).json({ message: 'No active membership found' });
    }

    const membershipData = {
      userId: membership.userId,
      fullName: membership.fullName,
      email: membership.userEmail,
      planName: membership.planName,
      planStartDate: membership.planStartDate.toISOString().split('T')[0],
      planDuration: membership.planDuration,
      planEndDate: membership.planEndDate.toISOString().split('T')[0],
      totalAmount: membership.totalAmount,
      paymentMethod: membership.paymentMethod,
      status: membership.status
    };

    res.json({
      success: true,
      membership: membershipData
    });

  } catch (error) {
    console.error('Error fetching membership:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// Get all orders for logged-in user (for order history)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const user = req.user; // From auth middleware

    const orders = await orderModel.find({ userEmail: user.email }).sort({ createdAt: -1 });

    res.json({
      success: true,
      orders: orders
    });

  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

module.exports = router;
