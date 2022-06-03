const { create } = require('../services/category');

class CategoryController {

//Metodo POST/ TODO:crear una nueva categoria en DB
 static async createCategory(req, res){
      const { name, description, image } = req.body;
      
      
      const categoria = await create({ name, description, image });


      res.status(200).json({ msg:'ok', categoria});
}

  
}

module.exports = CategoryController;
