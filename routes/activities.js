const express = require('express');
const router = express.Router();
const verifyToken = "Importar";
const checkAdmin = "Importar2";
const {createActivity} = require('../controllers/activities')


router.post('/', verifyToken, checkAdmin, createActivity);