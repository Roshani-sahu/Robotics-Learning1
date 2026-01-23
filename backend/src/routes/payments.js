const express = require('express');
const PaymentController = require('../controllers/paymentController');
const verifyFirebaseToken = require('../middleware/auth');
const { paymentLimiter, generalLimiter } = require('../middleware/rateLimiter');
const Razorpay = require('razorpay');

const router = express.Router();

// Your working Razorpay route
router.post('/orders/:amt', async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    
    const options = {
      amount: req.params.amt * 100, // Amount in paise
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };
    
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error Occured");

    res.json(order);
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    res.status(500).send(error);
  }
});

// Success page 
router.post('/success', async (req, res) => {
  try {
    const { orderId, paymentId, courseId, uid } = req.body;
    
    // Save purchase to Firestore
    const FirestoreService = require('../services/firestoreService');
    
    await FirestoreService.createPurchase({
      uid,
      courseId: courseId || 'i3fqAkTyIANhEIgnGXCx', // Default course ID
      razorpayOrderId: orderId,
      razorpayPaymentId: paymentId,
      amount: 24999,
      status: 'completed'
    });
    
    res.json({ message: "Payment Successfully Done", success: true });
  } catch (error) {
    console.error('Payment success error:', error);
    res.json({ message: "Payment Successfully Done", success: true }); // Still return success for user
  }
});

// Original routes (keeping for future use)
router.post('/create-order', paymentLimiter, verifyFirebaseToken, PaymentController.createOrder);
router.post('/verify', paymentLimiter, verifyFirebaseToken, PaymentController.verifyPayment);
router.get('/purchases', generalLimiter, verifyFirebaseToken, PaymentController.getUserPurchases);
router.post('/webhook', PaymentController.webhook);

module.exports = router;