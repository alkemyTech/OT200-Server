const express = require('express');
const router = express.Router();
const verifyToken = "Importar";
const checkAdmin = "Importar2";


router.post('/', verifyToken, checkAdmin, (req, res) => {
    
    res.send("Endpoint para crear activities");
})