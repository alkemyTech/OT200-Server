const db = require("../models/index");

const create = async (dataNews) => {
            
        const news = await db.News.create(dataNews);

       if(!news) {
            throw new Error("Error al crear noticia");
        }

        return news;
}

const findAll = async (offset, limit) => {

    const news = await db.News.findAll({
        offset,
        limit
    });

    return news;
}

const findId = async (id) => {
    
    const news = await db.News.findByPk(id);
    
    return news

}



module.exports = {
    findId,
    create,
    findAll
}
