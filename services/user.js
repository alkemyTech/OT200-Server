const db = require("./../models/");
const bcrypt = require("bcrypt");

const create = async (data) =>{

    const hash = await bcrypt.hash(data.password, 10);

    console.log(`LOG: ${data.roleId}`);

    const newUser = await db.sequelize.models.User.create({
        ...data,
        password: hash,
    });

    delete newUser.dataValues.password;

    return newUser

}

const findAll = async() => {

    const users = await db.User.findAll();

    return users;
}

module.exports = {
    create,
    findAll,
}


