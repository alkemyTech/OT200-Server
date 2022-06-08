const express = require('express');
const router = express.Router();
const verifyToken = "Importar";
const checkAdmin = "Importar2";
const {createActivity} = require('../controllers/activities');
const {verifyFields, errorHandler} = require('../middleware/activityValidator');


router.post('/', verifyToken, checkAdmin, verifyFields, errorHandler, createActivity);