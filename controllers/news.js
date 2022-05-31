const { createNews } = require("../services/news");

const newsController = {
    create: async (req, res) => {
        try {
            const { title, content, image, type } = req.body;

            const news = await createNews(title, content, image, type);

            res.status(201).json(news);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = newsController;
