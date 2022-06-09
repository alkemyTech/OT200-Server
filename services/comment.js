const { Comment: DB } = require("../models");

const createComment = async (data) => {
  const comment = new DB(data);

  await comment.save();

  return comment;
};

const changeComment = async (body, commentId) => {
  const check = (body) => {
    return Object.keys(body).length === 0;
  };

  if (!check) {
    const comment = await DB.update(
      { body },
      {
        where: {
          id: parseInt(commentId),
        },
      }
    );

    return comment;
  } else {
    throw { message: "Please insert data" };
  }
};

module.exports = {
  createComment,
};
