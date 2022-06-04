const express = require('express');
const router = express.Router();
const verifyToken = "Importar";
const checkAdmin = "Importar2";
const activityController = require('../controllers/activities')


router.post('/', verifyToken, checkAdmin, activityController);