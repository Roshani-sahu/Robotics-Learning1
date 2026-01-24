const razorpay = require('../config/razorpay');
const FirestoreService = require('./firestoreService');
const { verifyRazorpaySignature } = require('../utils/crypto');

class PaymentService {
  static async createOrder(courseId, uid) {
    try {
      console.log('PaymentService.createOrder called with:', { courseId, uid });
      
      const course = await FirestoreService.getCourse(courseId);
      console.log('Course found:', course);
      
      if (!course || !course.isActive) {
        throw new Error('Course not found');
      }

      // Check if already purchased
      const existingPurchase = await FirestoreService.getPurchase(uid, courseId);
      if (existingPurchase) {
        throw new Error('Course already purchased');
      }

      const options = {
        amount: course.price * 100, // Convert to paise
        currency: 'INR',
        receipt: `r_${Date.now()}`,
        notes: {
          courseId,
          uid
        }
      };

      console.log('Creating Razorpay order with options:', options);
      const order = await razorpay.orders.create(options);
      console.log('Razorpay order created:', order);
      
      // Save pending purchase
      await FirestoreService.createPurchase({
        uid,
        courseId,
        razorpayOrderId: order.id,
        razorpayPaymentId: 'pending',
        amount: course.price,
        status: 'pending'
      });
      
      return {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        courseTitle: course.title
      };
    } catch (error) {
      console.error('PaymentService.createOrder error:', error);
      throw error;
    }
  }

  static async verifyPayment(orderId, paymentId, signature, uid) {
    if (!verifyRazorpaySignature(orderId, paymentId, signature)) {
      throw new Error('Invalid payment signature');
    }

    const purchase = await FirestoreService.getPurchaseByOrderId(orderId);
    if (!purchase || purchase.uid !== uid) {
      throw new Error('Purchase not found');
    }

    await FirestoreService.updatePurchase(purchase.id, {
      razorpayPaymentId: paymentId,
      status: 'completed',
      purchaseDate: new Date()
    });

    return purchase;
  }

  static async getUserPurchases(uid) {
    const purchases = await FirestoreService.getUserPurchases(uid);
    
    // Get course details for each purchase
    const purchasesWithCourses = await Promise.all(
      purchases.map(async (purchase) => {
        const course = await FirestoreService.getCourse(purchase.courseId);
        return {
          ...purchase,
          course: course ? {
            title: course.title,
            description: course.description,
            instructor: course.instructor,
            thumbnail: course.thumbnail
          } : null
        };
      })
    );

    return purchasesWithCourses;
  }
}

module.exports = PaymentService;