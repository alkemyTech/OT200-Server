const checkOwnership = (req, res, next) => {

    const { id } = req.params;
    const tokenId = req.user.id;

    if (Number(id) === tokenId || tokenId === 1) return next();

    return res.status(403).json({
        error: true,
        message: "Insufficient permissions",
    });
};

module.exports = checkOwnership;
