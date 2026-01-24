const CourseService = require('../services/courseService');

class CourseController {
  static async getAllCourses(req, res) {
    try {
      const courses = await CourseService.getAllCourses();
      res.json({ courses });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCourse(req, res) {
    try {
      const { courseId } = req.params;
      const course = await CourseService.getCourseById(courseId);
      
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }

      res.json({ course });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCourseAccess(req, res) {
    try {
      const { courseId } = req.params;
      const { uid } = req.user;

      const accessData = await CourseService.generateCourseAccess(courseId, uid);
      res.json(accessData);
    } catch (error) {
      if (error.message === 'Course not purchased') {
        return res.status(403).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }

  static async checkAccess(req, res) {
    try {
      const { courseId } = req.params;
      const { uid } = req.user;

      const hasAccess = await CourseService.checkCourseAccess(courseId, uid);
      res.json({ hasAccess });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CourseController;