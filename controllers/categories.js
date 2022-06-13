
const { findAll, deleteOne, createCategory, categoryList } = require('../services/categories');


const deleteCategory = async (req, res)=> {

    try {

        const {id} = req.params;
        
        const result = await deleteOne(id);

        if(result === 0) {
            return res.status(404).json({
                error: true,
                message: "Category not found"
            })
        }
        
        return res.json({
            message: "Deleted",
            id
        })

    } catch (error) {        

        return res.status(500).json({
            error: true,
            message: "Something went wrong"
        })

    }
}

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
        res.status(500).json(error.message);
    }

};

const CategoriesList = async(req, res) => {

    const { page } = req.query;

    try {

        if( !page ) return res.status(400).json({ error: true, message: 'Bad request' });

        
        const pages = Number(page);
        const categories = await categoryList( pages );

        return res.status(200).json({ error:false, message: 'ok', categories });
        
        
    } catch (error) {
        if( !error.status ) {
            return res.status(500).json({error: true, message: error.message, categories: null });
        }
         res.status( error.status ).json({error: true, message: error.message, categories: null });

    }

};

const getOneCategory = (req, res) => {

};

const updateCategory = (req, res) => {

};


module.exports = {
    newCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCategory,
    CategoriesList
}

