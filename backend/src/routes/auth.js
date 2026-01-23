const express = require('express');
const AuthController = require('../controllers/authController');
const verifyFirebaseToken = require('../middleware/auth');
const { generalLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.get('/profile', generalLimiter, verifyFirebaseToken, AuthController.getProfile);

module.exports = router;