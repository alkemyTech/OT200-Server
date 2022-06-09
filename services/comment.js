const { Comment:DB } = require('../models')

const createComment = async( data ) => {

    const comment = new DB( data );

    await comment.save();

    return comment;

};

module.exports = {
    createComment,
}