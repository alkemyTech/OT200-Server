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

const findId = async (id) => {
    
    const userDb = await db.User.findByPk(id);
    
    return userDb

}

const update = async (body, id) => {

    const userUpdated = await db.User.update({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        photo: body.photo
    },
    {
        where: {
            id: id
        }
    }
    );
    return userUpdated;

}

module.exports = {
    create,
    update,
    findId
}


