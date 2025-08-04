const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Signup Route
router.post('/signup', register);

// Login Route
router.post('/login', login);

module.exports = router;
