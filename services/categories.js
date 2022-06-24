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


const categoryList = async( data ) => {

    const page = data - 1;
    const limite = 10;
    const next = (limite + data);
    const previous = ( data - limite );

    const { count, rows  } = await db.Categories.findAndCountAll({ offset: page, limit: limite });

    if( data > count ) throw { message:`La cantidad de registros es de: ${ count }`, status:400 };

    const categories = {
        count,
        limit:10,
        rows,
        nextPage: next > count ? null : `${ process.env.HTTP_DEVELOP }/categories?page=${ next }`,
        currentPage:  data === 1 ? null 
                    : previous > next ? null 
                    : previous <= 0 ? `${ process.env.HTTP_DEVELOP }/categories?page=1` 
                    : `${ process.env.HTTP_DEVELOP }/categories?page=${ previous }`
       
    }

    return categories;
}

const getCategory = async( id ) => {

    const category = await db.Categories.findByPk( id );

    if( !category ) throw { message:`La categoria con id: -${ id }- no existe en DB`, status: 404 };

    return category;

};



module.exports = {
    findAll,
    createCategory,
    deleteOne,
    categoryList,
    getCategory,
    updateData,
};
