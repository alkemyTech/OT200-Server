const modelRole = require('../models').Role;

const createRole = async (req, res) => {
    try{
        const newRole = await modelRole.create(req.body);
        return res.status(200).json({ error: false, message: "Role created successfully", data: newRole});
    }
    catch (error) {
        return res.status(409).json({ error: true, message: `Failed to create new role. Error: ${error}` });
    }
}

module.exports = { createRole };