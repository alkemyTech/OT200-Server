const { Comment: DB } = require("../models");

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

module.exports = {
  createComment,
  changeComment,
  findComment,
};
