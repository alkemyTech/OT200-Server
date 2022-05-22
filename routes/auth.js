const express = require('express');
const router = express.Router();
const { verifyToken, generateToken } = require('../middleware/userToken');
const validLogin = require('../middleware/validLogin');

router.post('/login',verifyToken, generateToken, validLogin)