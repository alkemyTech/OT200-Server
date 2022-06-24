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

const findAll = async() => {

    const users = await db.User.findAll();

    return users;
}

const deleteOne = async (id) => {

    const user = await db.User.destroy ({ where: {id} });

    return user;
}

module.exports = {
    create,
    findAll,
    deleteOne
}


