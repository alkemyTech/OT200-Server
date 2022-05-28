const findId = require('../services/news.js');

const  newsController = {
    detail: async (req, res) => {        
        try{
            if(!findId){
                return res.status(404).json({
                    message: 'No se encontro la noticia'
                });
            }else{
                return res.status(200).json({
                    message: 'Se encontro la noticia',
                    data: findId
                });
            }
        }catch{
            return res.status(500).json({
                message: 'Ocurrio un error'
            });
        }
    },
}

module.exports = newsController;