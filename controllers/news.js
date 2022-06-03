const findNews = require('../services/news');
const updateNews = require('../services/news');

const newsController = {
    update: (req, res) => {
        try{
            let id = req.params.id;

            let {title, content, image} = req.body;

            const findNewsId = findNews(id);
            
            if(!findNewsId){
                return res.status(404).send({
                    message: 'News not found'
                });
            }

            let news = updateNews(title, content, image);

            return res.status(200).send({
                message: 'News updated',
                news
            });
            
        }catch(error){
            res.status(500).send({
                message: 'Error updating news'
            });
        }
    }
}

module.exports = newsController;
