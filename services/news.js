const db = require('../models/index');

const updateNewsService = async (id, dataNews) => {

    const { name, content, image } = dataNews;

    const update = await db.News.update({
        name,
        content,
        image
        },{
            where : {id}
        });

    return update;

}

module.exports = {updateNewsService};