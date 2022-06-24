const { create, findId, findAll, updateNewsService } = require("../services/news");

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

const findAllNews = async (req, res) => {
    try {
        const limit = 10;
        
        const page = parseInt(req.query.page)

        const offset = page > 0 ? (page - 1) * limit : 0;
    
        const prevPage = (page - 1);

        const nextPage = (page + 1);        

        const news = await findAll(offset, limit);

        const {count} = news
        
        const totalPages = Math.ceil(count / limit);

        if(totalPages < page || page < 1){
            return res.status(404).json({
                message: "No existe la página solicitada"
            })
        }
       
        res.status(200).json({
            prevPage : `${ prevPage <= 0 ? 'No hay página previa' : 'http://localhost:3000/news?page=' + prevPage }`,
            currentPage: page,
            nextPage : `${  nextPage > totalPages  ? 'No hay página siguiente' : 'http://localhost:3000/news?page=' + nextPage }`,
            news,
            totalPages
        });
   
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


module.exports = {createNews, detailNews, updateNews, findAllNews};
