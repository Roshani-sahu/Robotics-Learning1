const PaymentService = require('../services/paymentService');
const { verifyWebhookSignature } = require('../utils/crypto');

class PaymentController {
  static async createOrder(req, res) {
    try {
      const { courseId } = req.body;
      const { uid } = req.user;

      console.log('Creating order for:', { courseId, uid });

      if (!courseId) {
        return res.status(400).json({ error: 'Course ID required' });
      }

      const orderData = await PaymentService.createOrder(courseId, uid);
      console.log('Order created successfully:', orderData);
      res.json(orderData);
    } catch (error) {
      console.error('Payment order creation error:', error);
      if (error.message === 'Course already purchased') {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error.message || 'Internal server error' });
    }
  }

  static async verifyPayment(req, res) {
    try {
      const { orderId, paymentId, signature } = req.body;
      const { uid } = req.user;

      if (!orderId || !paymentId || !signature) {
        return res.status(400).json({ error: 'Missing payment details' });
      }

      const purchase = await PaymentService.verifyPayment(orderId, paymentId, signature, uid);
      res.json({
        message: 'Payment verified successfully',
        purchase: {
          id: purchase._id,
          courseId: purchase.courseId,
          status: purchase.status,
          purchaseDate: purchase.purchaseDate
        }
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getUserPurchases(req, res) {
    try {
      const { uid } = req.user;
      const purchases = await PaymentService.getUserPurchases(uid);
      res.json({ purchases });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async webhook(req, res) {
    try {
      const signature = req.headers['x-razorpay-signature'];
      const body = JSON.stringify(req.body);

      if (!verifyWebhookSignature(body, signature)) {
        return res.status(400).json({ error: 'Invalid signature' });
      }

      const { event, payload } = req.body;

      if (event === 'payment.captured') {
        console.log('Payment captured:', payload.payment.entity.id);
      }

      res.json({ status: 'ok' });
    } catch (error) {
      console.error('Webhook error:', error);
      res.status(500).json({ error: 'Webhook processing failed' });
    }
  }
}

module.exports = PaymentController;