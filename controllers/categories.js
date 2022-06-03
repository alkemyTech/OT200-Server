// const db = require("../models/index");
// class CategoryController {
  
// }
// module.exports = CategoryController;

//HASTA ACA LO QUE ESTABA EN EL ARCHIVO.------------------------

//HAGO EL CONTROLLER PARA PODER AVANZAR.
const {findAll} = require('../services/categories');

const createCategory = (req, res) => {

};

const getAllCategories = (req, res) => {

    const categories = await findAll();

    res.send(categories);

};

const getOneCategory = (req, res) => {

};

const updateCategory = (req, res) => {

};

const deleteCategory = (req, res) => {

};

module.exports = {
    createCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCategory
}



