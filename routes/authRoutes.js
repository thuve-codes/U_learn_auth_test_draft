const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Signup Route
router.post('/signup', register);

// Login Route
router.post('/login', login);

// Profile Route
router.get('/profile', auth, getProfile);

module.exports = router;
