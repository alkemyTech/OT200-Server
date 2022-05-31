const db = require("../models/index");

const createNews = async (req, res) => {
    try{
        const {title, content, image, type} = req.body;
        
        const news = await db.News.create({
            title,
            content,
            image,
            type
        });

    res.status(201).json(news);

    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = createNews;