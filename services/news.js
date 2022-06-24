const db = require('../models/index');


const create = async (dataNews) => {
            
        const news = await db.News.create(dataNews);

       if(!news) {
            throw new Error("Error al crear noticia");
        }

        return news;
}

const findAll = async (page) => {

    const limit = 10;
    
    const offset = page > 0 ? (page - 1) * limit : 0;

    const prevPage = (page - 1);

    const nextPage = (page + 1);        

    const news = await db.News.findAndCountAll({
        offset,
        limit
    });

    const {count} = news
    
    const totalPages = Math.ceil(count / limit);

    if(totalPages < page || page == 0){        
        return {message: "No existe la página solicitada"}
    }
    
    const newsAll = {
        prevPage : `${ prevPage <= 0 ? 'No hay página previa' : 'http://localhost:3000/news?page=' + prevPage }`,
        currentPage: page,
        nextPage : `${  nextPage > totalPages  ? 'No hay página siguiente' : 'http://localhost:3000/news?page=' + nextPage }`,
        news,
        totalPages
    };

    return newsAll





    // const news = await db.News.findAndCountAll({
    //     offset,
    //     limit
    // });

    // return news;
}

const findId = async (id) => {
    
    const news = await db.News.findByPk(id);
    
    return news

}

const updateNewsService = async (id, dataNews) => {

    const { name, content, image } = dataNews;

    const update = await db.News.update({
        name,
        content,
        image
        },{
            where : {id}
        });

    if(update == 0) {
        throw new Error("Error al actualizar noticia");
    }
    
    return update;

}


module.exports = {
    findId,
    create,
    updateNewsService,
    findAll
}
