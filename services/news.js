const db = require("../models/index");

const create = async (dataNews) => {
            
        const news = await db.News.create(dataNews);

       if(!news) {
            throw new Error("Error al crear noticia");
        }

        return news;
}

module.exports = create;