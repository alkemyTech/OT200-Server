const db = require('../models/index');

const findId = async (id) => {
    return await db.News.findOne({
        where: {
            id: id
        }
    });
}

const updateNewsService = async (name,content,image) => {

    const update = await db.News.update({
        name,content,image
    },{
        where : {id}
    });

    return update;

}

module.exports = {findId, updateNewsService};