const db = require('../models');

const getAll = async () => {

    const comments = await db.Comment.findAll({
        attributes: ['body'],
        order: [
            ['createdAt', 'DESC']
        ] 
    });

    return comments;

}

module.exports = getAll;