const create = require("../services/user");

const createUser = async (req, res) => {
    try {

        const data = req.body;
        const newUser = await create(data)
        
        return res.json(newUser);

    } catch (error) {

        return res.status(500).json({
            error: true,
            message: "Something was wrong",
        });
    }
};

module.exports = {
    createUser,
};
