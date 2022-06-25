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
    
    const currentPage = data && Number(data) > 0 ? Number(data) : 0;

    const limit = 2;

    const offset = currentPage * limit;

    const prevPage = currentPage - 1;

    const nextPage = currentPage + 1;
    

     const { count, rows  } = await db.Categories.findAndCountAll({ offset, limit });


    const totalPages = Math.ceil(count / limit);

    if(Number(currentPage) > totalPages - 1) throw { message: `Solo hay un total de ${totalPages} paginas.`, status: 400 } ;

     const categories = { 
        prevPage: prevPage < 0 ? null : 'http://localhost:3000/categories/catalogue?page=' + prevPage,            
        currentPage: `http://localhost:3000/categories/catalogue?page=${currentPage}`,
        nextPage:  nextPage >= totalPages  ? null : 'http://localhost:3000/categories/catalogue?page=' + nextPage ,
        totalPages,
        rows,
    };         

    return categories;
    
};

const getCategory = async( id ) => {

    const category = await db.Categories.findByPk( id );

    if( !category ) throw { message:`La categoria con id: -${ id }- no existe en DB`, status: 404 };

    return category;
}


module.exports = {
    findAll,
    createCategory,
    deleteOne,
    categoryList,
    getCategory,
    updateData
};
