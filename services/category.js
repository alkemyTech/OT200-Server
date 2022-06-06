const { Categories: DB } = require("../models");


const createCategory = async(data) => {

    const category = new DB( data );

    await category.save();

    return category;
}


module.exports = {
    createCategory,
}