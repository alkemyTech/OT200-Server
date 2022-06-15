const { create, findId, deleteOne } = require("../services/news");

const createNews = async (req, res) => {
    try {
        const dataNews = req.body;

        const news = await create(dataNews);

        res.status(201).json(news);

    } catch (error) {
        res.status(500).json({
            message: error.message,
            error
        });
    }
}

const detailNews = async (req, res) => {
    try{
        const {id} = req.params;

        const news = await findId(id);

        if(!news){
            return res.status(404).json({
                message: 'No se encontró la noticia'
            })
        }
        
        res.status(200).json({
            message: 'Noticia encontrada',
            data: news
        })
    }catch(error){
        res.status(500).json({
            message: 'Error al buscar la noticia',
            error
        })
    }

}

const deleteNews = async (req, res) => {

    const id = req.params.id;

    try {

        const newsDb = await findId(id);
        console.log(newsDb);

        if (newsDb === null) {
            
            return res.status(404).json({
                message: "News not found",
                newsDb
            })

        }
        const deletedNew = await deleteOne(id);

            return res.status(200).json({
                message: "Deleted",
                id: id
            })
        
    } catch (error) {
        
        res.status(500).json({
            error: true,
            message: "An error has ocurred"
        })

    }

}


module.exports = {
    createNews, 
    detailNews,
    deleteNews
    };
