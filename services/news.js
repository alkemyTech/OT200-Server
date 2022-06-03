const db = require('../models/index');

const findNews = async () => {

    const newsId = await db.News.findByPk()

    return newsId
    
}

const updateNews = async () => {

    const update = await db.News.update({})

    return update
}

module.exports = {findNews, updateNews};