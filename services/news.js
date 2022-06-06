const db = require('../models/index');

const findId = async (id) => {
    
    const news = await db.News.findByPk(id);
    
    if(!news){
        throw new Error('No se encontró la noticia');
    }

    return news

}

module.exports = findId;