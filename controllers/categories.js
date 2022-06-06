
const { findAll } = require('../services/categories');

const createCategory = (req, res) => {

};

const getAllCategories = async (req, res) => {
    try {
        const categories = await findAll();

        res.json(categories);

    } catch (error) {
        res.json(error);
    }


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



