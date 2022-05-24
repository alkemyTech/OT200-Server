const bcrypt = require("bcrypt");
const db = require("./../models/");

const createUser = async (req, res) => {
    try {
        const data = req.body;
        const hash = await bcrypt.hash(data.password, 10);

        const newUser = await db.sequelize.models.User.create({
            ...data,
            password: hash,
        });

        delete newUser.dataValues.password;
        return res.json(newUser);
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: "Something was wrong",
        });
    }
};

module.exports = {
    createUser,
};
