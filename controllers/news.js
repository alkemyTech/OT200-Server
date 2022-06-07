const {findNews} = require('../services/news');
const {updateNewsService} = require('../services/news');

const updateNews = async (req, res) => {
    try{
        const {id} = req.params

        const {name, content, image} = req.body;

        let news = {}

        try {
            news = await findNews(id);
        } catch (error) {
            res.status(404).json({
                message: 'Error buscando la noticia'
            })
        }
        
        if(!news){
            return res.status(404).send({
                message: 'No se encontro la noticia'
            });
        }

        if(name){
            news.name = name
        }
        if(content){
            news.content = content
        }
        if(image){
            news.image = image
        }

        try{
            // await news.save()
            await updateNewsService(news)
        }catch(error){
            return res.status(500).json({
                message: 'Error al actualizar la noticia',
                error
            })
        }

        return res.status(200).send({
            message: 'Noticia actualizada',
            news
        });
        
    }catch(error){
        res.status(500).send({
            message: 'Error al actualizar la noticia "Catch"',
        });
        console.log(error);
    }
}


module.exports = {updateNews};
