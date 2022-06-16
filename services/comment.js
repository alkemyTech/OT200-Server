const { Comment: DB } = require('../models')
const db = require('../models');

const createComment = async (data) => {

    const comment = new DB(data);

    await comment.save();

    return comment;

};

const findId = async (id) => {

    const comment = await db.Comment.findByPk(id);

    return comment;

}

const deleteOne = async (user, id) => {

    const commentUserId = await db.Comment.findByPk(id);

    if (commentUserId === null) {
        return null;
    } else {
        console.log("Existe el comentario");
        console.log("idComment: " + commentUserId.dataValues.user_id)
        console.log("idUser: " + user.roleId)

        if (commentUserId.dataValues.user_id === user.id || user.roleId === 1) {

        const comment = await db.Comment.destroy({ where: { id } });

        return comment;

    } else {
        return "No tiene permisos para eliminar este comentario";
    }
}
}


module.exports = {
    createComment,
    findId,
    deleteOne
}