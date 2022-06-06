const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const MessageController = require('../controllers/message');

// Users
router.get('/get-users', userController.getUsers);
router.get('/get-message', MessageController.getMessage);
router.get('/logout', userController.logout);
router.post('/register', userController.createUser);
router.post('/login', userController.getLogin);
router.post('/message', MessageController.messages);

module.exports = router;
