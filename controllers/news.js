const { createNews } = require("../services/news");

const newsController = {
    create: async (req, res) => {
        try {
            const { title, content, image} = req.body;

            const news = await createNews(title, content, image);

            res.status(201).json(news);

        } catch (error) {
            res.status(500).json({
                message: "Error al crear noticia",
                error
            });
        }
    }
}

module.exports = newsController;
