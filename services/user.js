const db = require("./../models/");
const bcrypt = require("bcrypt");

const create = async (data) =>{

    const hash = await bcrypt.hash(data.password, 10);

    const newUser = await db.sequelize.models.User.create({
        ...data,
        password: hash,
    });

    delete newUser.dataValues.password;

    return newUser

}

module.exports = {
    create,
}


