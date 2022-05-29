const express = require("express");
const router = express.Router();
const categoriesController = require('../controllers/categories');
const verifyToken = "Se importara el middleware para verificarToken";
const checkAdmin = "Se importara el middleware para verificar si el uusuario es Admin";

//DEBO REQUERIR MODELO Y CONTROLLER DE CATEGORIAS


router.get("/", verifyToken, checkAdmin(req.user.id), async (req, res) => {
    res.send("Listado de categorías");
    const categories = await categoriesController.getAllCategories({
        attributes: ['name']
    });
});


module.exports = router;