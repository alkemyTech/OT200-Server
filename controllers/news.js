const create = require("../services/news");

const createNews = async (req, res) => {
    try {
        const dataNews = req.body;

        const news = await create(dataNews);

        res.status(201).json(news);

    } catch (error) {
        res.status(500).json({
            message: "Error al crear noticia",
            error
        });
    }
}


module.exports = {createNews};
