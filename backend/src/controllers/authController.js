const FirestoreService = require('../services/firestoreService');

class AuthController {
  static async getProfile(req, res) {
    try {
      const { uid } = req.user;
      
      let user = await FirestoreService.getUser(uid);
      
      // Create user record if doesn't exist
      if (!user) {
        await FirestoreService.createUser(uid, {
          email: req.user.email,
          emailVerified: req.user.emailVerified
        });
        user = await FirestoreService.getUser(uid);
      }

      res.json({
        user: {
          uid: req.user.uid,
          email: req.user.email,
          role: user.role || 'user'
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;