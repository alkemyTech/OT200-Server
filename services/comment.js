const { Comment:DB } = require('../models')
const db = require('../models');

const createComment = async( data ) => {

    const comment = new DB( data );

    await comment.save();

    return comment;

};

const findId = async (id) => {
    
    const comment = await db.Comment.findByPk(id);
    
    return comment;

}

const deleteOne = async (id) => {

    const comment = await db.Comment.destroy( {where: {id} });

    return comment;

}



module.exports = {
    createComment,
    findId,
    deleteOne
}