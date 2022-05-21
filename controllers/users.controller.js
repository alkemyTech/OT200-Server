const modelUser = require('../models').User;

const createUser = async (req, res) => {
    try {
        const newUser = await modelUser.create(req.body);
        return res.status(200).json({error: false, message: "User created successfully", data: newUser});
    }
    catch (error) {
        return res.status(409).json({ error: true, message: `Failed to create new user. Error: ${error}` });
    }
}

module.exports = { createUser };