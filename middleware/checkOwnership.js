const checkOwnership = (req, res, next) => {

    const { id } = req.params;
    const tokenId = req.user.id;
    const tokenRoleId = req.user.roleId

    if (Number(id) === tokenId || tokenRoleId === 1) return next();

    return res.status(401).json({
        error: true,
        message: "Insufficient permissions",
    });
};

module.exports = checkOwnership;
