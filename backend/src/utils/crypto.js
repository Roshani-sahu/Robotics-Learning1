const crypto = require('crypto');

const verifyRazorpaySignature = (orderId, paymentId, signature) => {
  const body = orderId + '|' + paymentId;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');
  
  return expectedSignature === signature;
};

const verifyWebhookSignature = (body, signature) => {
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  
  return expectedSignature === signature;
};

const generateAccessToken = (courseId, firebaseUID) => {
  const payload = {
    courseId,
    firebaseUID,
    exp: Math.floor(Date.now() / 1000) + parseInt(process.env.COURSE_ACCESS_EXPIRY)
  };
  
  return Buffer.from(JSON.stringify(payload)).toString('base64');
};

const verifyAccessToken = (token) => {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    
    return payload;
  } catch (error) {
    return null;
  }
};

module.exports = {
  verifyRazorpaySignature,
  verifyWebhookSignature,
  generateAccessToken,
  verifyAccessToken
};