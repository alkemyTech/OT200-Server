const db = require("../models");

const deleteOne = async (id) => {

    const category =  await db.Categories.destroy( { where: { id } } );    
 
    return category
 }

const findAll = async() => {
    
    const category = await db.Categories.findAll({attributes: ['name']});

  return category;
};

const updateData = async (body, categoryId) => {
  const category = await db.Category.update(
    {
      name: body.name,
      description: body.description,
      image: body.image,
    },
    {
      where: {
        id: parseInt(categoryId),
      },
    }
  );
  return category;
};

const createCategory = async(data) => {

    const category = new db.Categories( data );

    await category.save();

    return category;
};


const getCategory = async( id ) => {

    const category = await db.Categories.findByPk( id );

    if( !category ) throw { message:`La categoria con id: -${ id }- no existe en DB`, status: 404 };

    return category;

};



module.exports = {
    findAll,
    createCategory,
    getCategory,
    deleteOne,
    updateData,
};
