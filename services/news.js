const db = require("../models/index");

const createNews = async (news) => {
            
        const news = await db.News.create(news);

        return news;
}

module.exports = createNews;