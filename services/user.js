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

const getOne = async (id) => { // LO HAGO PARA TRAER LOS DATOS DEL USUARIO PREVIO A LA ACTUALIZACIÓN
    const userDb = await db1.User.findAll(
        {
        where: {
            id: id
        }
    }
    );

    return userDb;

}

const update = async (user, id) => {

    const userUp = await db.User.update({firstName: user.firstName, lastName: user.lastName,
        email: user.email, password: user.password, photo: user.photo},
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
    getOne
}


