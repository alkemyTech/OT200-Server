const { create, findId, findAll } = require("../services/news");

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
    
        const pagePrev = (page - 1);

        const pageNext = (page + 1);        

        const news = await findAll(offset, limit);

        const count = news.length;
       

        res.status(200).json({
            pagePrev : `${ pagePrev <= 0 ? 'No hay pagina previa' : 'http://localhost:3000/news?page=' + pagePrev }`,
            pageNext : `${  pageNext > count ? 'No hay pagina siguiente' : 'http://localhost:3000/news?page=' + pageNext }`,
            news,
            page,
            count
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


module.exports = {createNews, detailNews, findAllNews};
