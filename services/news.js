const db = require('../models/index');

const findId = async () => {
    
    const news = await db.News.findByPk();

    return news

}
 module.exports = findId;