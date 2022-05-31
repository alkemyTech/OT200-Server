const db = require("../models/index");

class CategoryController {

//Metodo POST/ TODO:crear una nueva categoria en DB
 static createCategory(req, res){
      const { name } = req.body;
      res.json({ msg:'Crear categoria', name})
}

  
}

module.exports = CategoryController;
