const express = require('express');
const router = express.Router();
const validLogin = require('../middleware/validLogin');
const userController = require('../controllers/userController');

router.post('/login', validLogin, userController)