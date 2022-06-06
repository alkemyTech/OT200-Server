const db = require('../models');

const findUser = async (email) => {
  
    const user = await db.User.findOne(email);

    return user

}

module.exports = findUser;
