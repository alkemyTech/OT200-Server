const {create, updateNewsService, findId, deleteOne} = require('../services/news');


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

    try {
        const id = req.params.id;
        
        const deletedNew = await deleteOne(id);
        
        if (deletedNew === 0) {            
            return res.status(404).json({
                message: "News not found",
            })

        }
            return res.status(200).json({
                message: "Deleted",
                id: id
            })
        
    } catch (error) {
        
        res.status(500).json({
            error: true,
            message: error.message
        })

    }

}

const updateNews = async (req, res) => {
    try{
        const {id} = req.params

        const {name, content, image} = req.body;

        const update = await updateNewsService(id,{name, content, image});
        
        res.status(200).json({
            message: 'Noticia actualizada',
            data: update,
            newData: { name, content, image }

        });

    }catch(error){
        res.status(500).send({
            message: error.message,
        });
        console.log(error);
    }
}


module.exports = {createNews, detailNews, updateNews, deleteNews};
