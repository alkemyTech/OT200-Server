const db = require("../models/index");

const createNews = async () => {
            
        const news = await db.News.create();

        return news;
}

module.exports = createNews;