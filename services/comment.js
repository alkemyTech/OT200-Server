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

const createComment = async( data ) => {

    const comment = new db.Comments ( data );

    await comment.save();

    return comment;

};

module.exports = {
    getAll,
    createComment
}
