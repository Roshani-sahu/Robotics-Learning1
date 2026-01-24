const express = require('express');
const CourseController = require('../controllers/courseController');
const verifyFirebaseToken = require('../middleware/auth');
const { generalLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.get('/', generalLimiter, CourseController.getAllCourses);
router.get('/:courseId', generalLimiter, CourseController.getCourse);
router.get('/:courseId/access', verifyFirebaseToken, CourseController.getCourseAccess);
router.get('/:courseId/check-access', verifyFirebaseToken, CourseController.checkAccess);

module.exports = router;