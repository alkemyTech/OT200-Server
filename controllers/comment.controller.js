const getAll = require('../services/comment');

const getAllComments = async (req, res) => {

    const comments = await getAll();

    res.status(201).json(comments);

}

module.exports = getAllComments;