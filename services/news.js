const db = require('../models/index');


const create = async (dataNews) => {
            
        const news = await db.News.create(dataNews);

       if(!news) {
            throw new Error("Error al crear noticia");
        }

        return news;
}

const findAll = async (offset, limit) => {

    const news = await db.News.findAndCountAll({
        offset,
        limit
    });

    return news;
}

const findId = async (id) => {
    
    const news = await db.News.findByPk(id);
    
    return news

}

<<<<<<< HEAD
=======
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
>>>>>>> main


module.exports = {
    findId,
    create,
<<<<<<< HEAD
    findAll
}
=======
    updateNewsService
}
>>>>>>> main
