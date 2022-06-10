const {updateNewsService,findId} = require('../services/news');

const updateNews = async (req, res) => {
    try{
        const {id} = req.params

        const {name, content, image} = req.body;

        const news = await findId(id);

        if(!news){
            return res.status(404).json({
                message: 'News not found',
                news
            })
        }

        const update = await updateNewsService(id,{name, content, image});

        if(name){
            update.name = name;
        }
        if(content){
            update.content = content;
        }
        if(image){
            update.image = image;
        }
        
        res.status(200).json({
            message: 'Noticia actualizada',
            data: news
        });

    }catch(error){
        res.status(500).send({
            message: 'Error al actualizar la noticia "Catch"',
        });
        console.log(error);
    }
}


module.exports = {updateNews};
