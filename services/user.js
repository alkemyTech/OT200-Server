const db = require("./../models/");
const db1 = require('../models');
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

const findId = async (id) => {
    
    const userDb = await db.User.findByPk(id);
    
    return userDb

}

const update = async (user, id) => {

    const {firstName, lastName, email, password, photo} = user;

    const userUp = await db.User.update({
        firstName,
        lastName,
        email,
        password,
        photo
    },
    {
        where: {
            id: id
        }
    }
    );
    return userUp;

}

module.exports = {
    create,
    update,
    findId
}


