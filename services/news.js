const db = require('../models/index');

const findId = async (req, res) => {

    const id = req.params.id;
    
    const news = await db.News.findOne({id});

    return news

}
 module.exports = findId;