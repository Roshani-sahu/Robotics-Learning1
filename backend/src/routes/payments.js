const express = require('express');
const PaymentController = require('../controllers/paymentController');
const verifyFirebaseToken = require('../middleware/auth');
const { paymentLimiter, generalLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Secure routes
router.post('/create-order', paymentLimiter, verifyFirebaseToken, PaymentController.createOrder);
router.post('/verify', paymentLimiter, verifyFirebaseToken, PaymentController.verifyPayment);
router.get('/purchases', generalLimiter, verifyFirebaseToken, PaymentController.getUserPurchases);
router.post('/webhook', PaymentController.webhook);

module.exports = router;