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
          role: user.role || 'user',
          ...user // Include all other user fields
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateProfile(req, res) {
    try {
      const { uid } = req.user;
      const updateData = req.body;
      
      console.log('UpdateProfile called for uid:', uid);
      console.log('UpdateData received:', updateData);

      // Filter allowed fields
      const allowedFields = ['firstName', 'lastName', 'middleName', 'photoURL'];
      const filteredData = Object.keys(updateData)
        .filter(key => allowedFields.includes(key))
        .reduce((obj, key) => {
          obj[key] = updateData[key];
          return obj;
        }, {});

      console.log('Filtered data to write:', filteredData);

      if (Object.keys(filteredData).length === 0) {
        return res.status(400).json({ error: 'No valid fields to update' });
      }

      await FirestoreService.updateUser(uid, filteredData);
      console.log('Firestore update completed');
      
      res.json({ message: 'Profile updated successfully', user: filteredData });
    } catch (error) {
      console.error('UpdateProfile error:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;