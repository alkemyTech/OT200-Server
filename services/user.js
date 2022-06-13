const db = require("./../models/");
const bcrypt = require("bcrypt");

const create = async (data) =>{

    const hash = await bcrypt.hash(data.password, 10);

    const newUser = await db.User.create({
        ...data,
        password: hash,
        roleId: 2
    });

    delete newUser.dataValues.password;

    return newUser

}

const findAll = async() => {

    const users = await db.User.findAll();

    return users;
}

const findByEmail = async (email) => {

    const user = await db.User.findOne({ where: { email } });

    return user;
}

module.exports = {
    create,
    findAll,
    findByEmail
}


