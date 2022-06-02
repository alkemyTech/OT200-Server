const db = require("../models/index");

const createNews = async () => {
            
        const news = await db.News.create({
            title,
            content,
            image
        });

        return news;
}

module.exports = createNews;