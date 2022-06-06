const db = require("../models/index");

const create = async (dataNews) => {
            
        const news = await db.News.create(dataNews);

        return news;
}

module.exports = create;