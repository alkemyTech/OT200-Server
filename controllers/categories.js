const { createCategory } = require('../services/category');

class CategoryController {

 static async newCategory(req, res){
      const { name, description, image } = req.body;
      
      
      const categoria = await createCategory({ name, description, image });


      res.status(200).json({ msg:'ok', categoria});
}

  
}

module.exports = CategoryController;
