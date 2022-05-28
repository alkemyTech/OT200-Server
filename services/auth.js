const db = require('../models');

const findUser = async (req, res) => {
    const { email } = req.body;
    const user = await db.User.findOne({email});

    return user
}

module.exports = findUser;