
const { Comment: DB } = require("../models");
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


const createComment = async (data) => {
  const comment = new DB(data);

  await comment.save();

  return comment;
};

const changeComment = async (body, commentId) => {
  const comment = await DB.update(
    { body },
    {
      where: {
        id: parseInt(commentId),
      },
    }
  );

  if (!comment) {
    return { success: false, message: "User not found" };
  } else {
    return comment;
  }
};

const findComment = async (idComment) => {
  const comment = await DB.findOne({ where: { id: parseInt(idComment) } });
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
  changeComment,
  findComment,
  allCommentsFromPost,
    getAll,
};
