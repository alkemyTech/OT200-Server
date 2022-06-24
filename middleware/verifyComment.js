const { userRolAdmin } = require("../helpers");
const { findComment } = require("../services/comment");

const verifyOwner = async (req, res, next) => {
  const rol = req.user.roleId;
  const { id } = req.params;
  const admin = await userRolAdmin("admin");

  if (rol === admin.id) {
    return next();
  } else {
    try {
      const { user_id } = await findComment(id);
      if (user_id === req.user.id) {
        return next();
      } else {
        return res.status(403).json({
          success: false,
          message: "You don't have permissions for this action",
        });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};

module.exports = verifyOwner;
