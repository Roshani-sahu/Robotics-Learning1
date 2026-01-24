const FirestoreService = require('./firestoreService');
const { generateAccessToken } = require('../utils/crypto');

class CourseService {
  static async getAllCourses() {
    return await FirestoreService.getAllCourses();
  }

  static async getCourseById(courseId) {
    return await FirestoreService.getCourse(courseId);
  }

  static async generateCourseAccess(courseId, uid) {
    // Verify purchase
    const purchase = await FirestoreService.getPurchase(uid, courseId);
    if (!purchase) {
      throw new Error('Course not purchased');
    }

    const course = await FirestoreService.getCourse(courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    // Generate temporary access token
    const accessToken = generateAccessToken(courseId, uid);
    
    return {
      accessUrl: `${course.accessLink}?token=${accessToken}`,
      expiresIn: process.env.COURSE_ACCESS_EXPIRY
    };
  }

  static async checkCourseAccess(courseId, uid) {
    const purchase = await FirestoreService.getPurchase(uid, courseId);
    return !!purchase;
  }
}

module.exports = CourseService;