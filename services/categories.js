const db = require('../models');

const deleteOne = async (id) => {

    const category =  await db.Categories.destroy( { where: { id } } );    
 
    return category
 }

const findAll = async() => {
    
    const category = await db.Categories.findAll({attributes: ['name']});

    return category;
}

const createCategory = async(data) => {

    const category = new db.Categories( data );

    await category.save();

    return category;
};


const categoryList = async( data ) => {

    const currentPage = data && data > 0 ? data : 0;

    const limit = 10;

    const offset = currentPage * limit;

    const prevPage = currentPage - 1;

    const nextPage = currentPage + 1;
    

     const { count, rows  } = await db.Categories.findAndCountAll({ offset, limit });


    const totalPages = Math.ceil(count / limit);

    if(Number(currentPage) > totalPages - 1) throw { message: `There are just ${totalPages} pages.`, status: 400 } ;

     const categories = { 
        prevPage: `${ prevPage < 0 ? 'There is no previous page' : 'http://localhost:3000/categories/catalogue?page=' + prevPage }`,            
        currentPage: `http://localhost:3000/categories/catalogue?page=${currentPage}`,
        nextPage: `${ nextPage >= totalPages  ? 'There is no next page' : 'http://localhost:3000/categories/catalogue?page=' + nextPage }`,
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
};