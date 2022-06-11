const getComment = require('../services/comment').findId;

const checkCommentOwner = async (req, res, next) => {

    const id = req.params.id;
    const userId = req.user.id;
    const userRoleId = req.user.roleId;

    const comment = await getComment(id);
    const commentUserId = comment.user_id;

    // console.log("userId:" + userId);
    // console.log("userRoleId:" + userRoleId);

    if ((userId === commentUserId) || userRoleId === 1) {
        
        return next();

    } else {
        
        return res.status(401).json({
            error: true,
            message: "Insufficient permissions",
        });
    }

    
}

module.exports = checkCommentOwner;