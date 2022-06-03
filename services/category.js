const { Categories: DB } = require("../models");


const create = async(data) => {

    //Se crea la categoria
    const category = new DB( data );

      
    //Se guarda en la db
    await category.save();

    return category;
}


module.exports = {
    create
}