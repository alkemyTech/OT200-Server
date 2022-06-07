const db = require('../models/index');

const findNews = async (id) => {

    const newsId = await db.News.findByPk(id)

    if (newsId === null) {
        console.log('News not found')
    }

    return newsId
    
}

const updateNewsService = async (dataUpdate) => {

    const update = await db.News.update(dataUpdate)

    if (!update) {
        throw new Error('News not found')
    }

    return update
}

module.exports = {findNews, updateNewsService};