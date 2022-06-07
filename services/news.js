const db = require('../models/index');

const findId = async (id) => {
    
    const news = await db.News.findByPk(id);

    if(news === null){
        console.log('No se encontró la noticia');
    }

    return news

}

module.exports = findId;