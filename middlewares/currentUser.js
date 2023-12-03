const jwt = require('jsonwebtoken');
//const User = require('../models/User'); // Assuming you have an Admin model
const db = require('../connection');
require('dotenv').config();
async function isUser(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_TOKEN);
  
      // Check if the user exists in the PostgreSQL database
      const user = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [decoded.userId]);
  
      if (!user) {
        return res.status(403).json({ message: 'Access denied' });
      }
  
      // Attach the user's ID to the request object for future use
      req.userId = user.id;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  }
module.exports = isUser;