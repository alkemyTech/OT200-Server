const db = require('../models/index');

const findId = async (id) => {
    
    const news = await db.News.findByPk(id);
    
    return news

}

module.exports = findId;