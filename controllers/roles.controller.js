const modelRole = require('../models').Role;

const createRole = async (req, res) => {
    const newRole = await modelRole.create(req.body);
    return res.status(200).json({error: false, message: "Role created successfully", data: newRole});
}

module.exports = { createRole };