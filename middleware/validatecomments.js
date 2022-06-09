
const { userRolAdmin } = require("../helpers");



const verifyOwner = (req, res, next) => {
    const rol = req.user.roleId
    const admin = await userRolAdmin('admin');
    if (rol === admin.id) {
        return next()
    } else if (req.user.id === req.body.user_id) {
        return next()
    }
    else {
        return res.status(403).json({ success: false, message: "You don't have permissions for this action" })
    }

};

module.exports = verifyOwner;