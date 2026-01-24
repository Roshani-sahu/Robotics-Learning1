const { db } = require('../config/firebase');

class FirestoreService {
  // Users
  static async createUser(uid, userData) {
    await db.collection('users').doc(uid).set({
      ...userData,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  static async getUser(uid) {
    const doc = await db.collection('users').doc(uid).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }

  static async updateUser(uid, updateData) {
    console.log(`FirestoreService: Updating user ${uid} with data:`, updateData);
    await db.collection('users').doc(uid).set({
      ...updateData,
      updatedAt: new Date()
    }, { merge: true });
    console.log('FirestoreService: Update successful');
  }

  // Courses
  static async getAllCourses() {
    const snapshot = await db.collection('courses').where('isActive', '==', true).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async getCourse(courseId) {
    const doc = await db.collection('courses').doc(courseId).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }

  static async createCourse(courseData) {
    const docRef = await db.collection('courses').add({
      ...courseData,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  }

  // Purchases
  static async createPurchase(purchaseData) {
    const docRef = await db.collection('purchases').add({
      ...purchaseData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  }

  static async getPurchase(uid, courseId) {
    const snapshot = await db.collection('purchases')
      .where('uid', '==', uid)
      .where('courseId', '==', courseId)
      .where('status', '==', 'completed')
      .get();
    
    return snapshot.empty ? null : { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  }

  static async getUserPurchases(uid) {
    const snapshot = await db.collection('purchases')
      .where('uid', '==', uid)
      .where('status', '==', 'completed')
      .get();
    
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async updatePurchase(purchaseId, updateData) {
    await db.collection('purchases').doc(purchaseId).update({
      ...updateData,
      updatedAt: new Date()
    });
  }

  static async getPurchaseByOrderId(orderId) {
    const snapshot = await db.collection('purchases')
      .where('razorpayOrderId', '==', orderId)
      .get();
    
    return snapshot.empty ? null : { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  }
}

module.exports = FirestoreService;