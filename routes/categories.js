const express = require("express");
const router = express.Router();
const {findAll} = require('../controllers/categories').getAllCategories;
const verifyToken = "Se importara el middleware para verificarToken";
const checkAdmin = "Se importara el middleware para verificar si el uusuario es Admin";

//DEBO REQUERIR MODELO Y CONTROLLER DE CATEGORIAS


router.get("/", verifyToken, checkAdmin(req.user.id), findAll);


module.exports = router;