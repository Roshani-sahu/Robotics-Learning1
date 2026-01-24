const express = require('express');
const AuthController = require('../controllers/authController');
const verifyFirebaseToken = require('../middleware/auth');
const router = express.Router();

router.put('/profile', verifyFirebaseToken, AuthController.updateProfile);
router.get('/profile', verifyFirebaseToken, AuthController.getProfile);

module.exports = router;