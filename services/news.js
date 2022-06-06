const db = require('../models/index');

const findNews = async (id) => {

    const newsId = await db.News.findByPk(id)

    if (!newsId) {
        throw new Error('News not found')
    }

    return newsId
    
}

const updateNews = async (dataUpdate) => {

    const update = await db.News.update(dataUpdate)

    if (!update) {
        throw new Error('News not found')
    }

    return update
}

module.exports = {findNews, updateNews};