const { createCategory } = require('../services/category');

class CategoryController {

 static async newCategory(req, res){
      const { name, description, image } = req.body;
      
      try {
            const categoria = await createCategory({ name, description, image });
      
      
            res.status(200).json({ error: false, message:'La categoría se creo con exito', category: categoria});
            
      } catch (error) {

            console.log(error);
            res.status(500).json({ error: true, message:'Ah ocurrido un error, comuniquese con administración', category: null});
      }
      
}

  
}

module.exports = CategoryController;
