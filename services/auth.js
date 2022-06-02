const db = require('../models');

const findUser = async () => {
  
    const user = await db.User.findOne();

    return user

}

module.exports = findUser;
