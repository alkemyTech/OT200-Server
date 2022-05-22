const jwt = require('jsonwebtoken');
const db = require('../models');

const generateToken = (user) => {
    const tokenSign = {
        id: user.id,
        roleId: user.roleId
    };
    const expire = {
        expiresIn: '1d'
    };
    return jwt.sign(tokenSign, process.env.SECRET_KEY, expire);
}

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({
            error: 'No se encontro el token'
        });
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await db.User.findOne({
            where: {
                id: decoded.id}
                });
        if(!user){
            return res.status(401).json({
                error: 'Token invalido - Usuario no encontrado'
            });
        }
        req.user = user;
        next();            
    } catch(error){
        res.status(401).json({
            error: "Token invalido"
        });
    }
}

    


module.exports = {generateToken, verifyToken};