const {updateNewsService} = require('../services/news');

const updateNews = async (req, res) => {
    try{
        const {id} = req.params

        const {name, content, image} = req.body;

        const update = await updateNewsService(id, {name, content, image});

        return res.status(200).send({
            message: 'Noticia actualizada',
            data: update
        });
        
    }catch(error){
        res.status(500).send({
            message: 'Error al actualizar la noticia "Catch"',
        });
        console.log(error);
    }
}


module.exports = {updateNews};
