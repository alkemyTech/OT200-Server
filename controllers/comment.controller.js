const getAll = require('../services/comment');

const getAllComments = async (req, res) => {
    try {
        const comments = await getAll();

        res.status(200).json(comments);

    } catch (error) {

        res.status(500).json(error);
    }


}

module.exports = getAllComments;