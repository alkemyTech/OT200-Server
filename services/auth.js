const db = require('../models');

const findUser = async (email) => {

    const user = await db.User.findOne({ where: { email } });

    if (!user) {
        throw new Error('No se encontró el usuario');
    }
    
    return user
}

module.exports = findUser;
