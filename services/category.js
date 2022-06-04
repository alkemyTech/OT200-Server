const db = require("./../models/")

const findOne = async (id) => {

    const category = await db.Categories.findByPk(id);    

    if(!category) throw new Error("Category not found");

    return category
}

const deleteOne = async (id) => {

    const category = await findOne(id);

    await category.destroy();    
}

module.exports = deleteOne