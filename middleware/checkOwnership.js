const dbValidator = require("../helpers/dbValidator");

function checkOwnership (modelName) {

    return async (req, res, next)=> {

        try {

            const { id } = req.params;
            const tokenId = req.user.id;
            const tokenRoleId = req.user.roleId;
        
            const result = await dbValidator(modelName, id, tokenId);

            if(result || tokenRoleId === 1) return next();

            return res.status(401).json({
                error: true,
                message: "Insufficient permissions",
            }); 
            
        } catch (error) {

            return res.status(500).json({
                error: true,
                message: error.message
            });
        }
    };
}

module.exports = checkOwnership;
