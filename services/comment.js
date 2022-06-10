const { Comment:DB } = require('../models')

const createComment = async( data ) => {

    const comment = new DB( data );

    await comment.save();

    return comment;

};

const allCommentsFromPost = async( id ) => {

    const comments = await DB.findAll({
        where: {
          post_id: id,
        },
    });

    if( comments == '' ) throw { message:'No se encontraron comentarios en este post', status: 400 }

    return comments;

};


module.exports = {
    createComment,
    allCommentsFromPost
}