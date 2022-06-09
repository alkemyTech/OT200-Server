const { findAll, createCategory, getCategory } = require('../services/categories');


const newCategory = async(req, res) => {

    const { name, description, image } = req.body;
    
    try {
        const categoria = await createCategory({ name, description, image });
    
    
        res.status(200).json({ error: false, message:'La categoría se creo con exito', category: categoria});
        
    } catch (error) {

        res.status(500).json({ error: true, message:'Ah ocurrido un error, comuniquese con administración', category: null});
    }
        
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await findAll();


        res.json(categories);

    } catch (error) {
        res.json(error);
    }


};

const getOneCategory = async(req, res) => {

    const { id } = req.params;

    try {

        const category = await getCategory( id );
    
        res.status(200).json({error: false, message: 'ok', category});
        
    } catch (error) {
        if( !error.status ) {
           return res.status(500).json({
                error: true,
                message: 'Error en el servidor, comunicarse con el administrador ',
                category: null
            });
        }

        res.status(error.status).json({error: true, message: error.message, category: null});

    }

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



