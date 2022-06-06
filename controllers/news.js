const findId = require('../services/news.js');

const detailNews = (req, res) => {
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
    }catch{
        return res.status(500).json({
            message: 'Ocurrio un error'
        });
    }
}


module.exports = {detailNews};