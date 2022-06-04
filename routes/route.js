const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// Users
router.get('/get-users', userController.getUsers);
router.post('/register', userController.createUser);
router.post('/login', userController.getLogin);

module.exports = router;
