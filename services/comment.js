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

    const comment = new db.Comment ( data );

    await comment.save();

    return comment;

};

const allCommentsFromPost = async( id ) => {

    const comments = await db.Comment.findAll({
        where: {
          post_id: id,
        },
    });


    return comments;

};


module.exports = {
    createComment,
    allCommentsFromPost,
    getAll,
}
