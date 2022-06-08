const { findAll } = require('../services/categories');
const { createCategory } = require('../services/category');


const newCategory = async(req, res) => {

    const { name, description, image } = req.body;
    
    try {
        const categoria = await createCategory({ name, description, image });
    
    
        res.status(200).json({ error: false, message:'La categoría se creo con exito', category: categoria});
        
    } catch (error) {

        console.log(error);
        res.status(500).json({ error: true, message:'Ah ocurrido un error, comuniquese con administración', category: null});
    }
        
}

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
    newCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCategory
}



