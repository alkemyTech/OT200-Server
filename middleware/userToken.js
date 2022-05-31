const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const tokenSign = {
        id: user.id,
        roleId: user.roleId,
    };

    const expire = {
        expiresIn: '1d'
    };

    return jwt.sign(tokenSign, process.env.SECRET_KEY, expire);
}

const userVerify = async (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).json({
            message: 'No se encontro el token'
        });
    }

    try{
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);

        req.user = decoded;

        next();

    }catch(error){
        return res.status(401).json({
            message: 'Token invalido'
        });
    }
}

    


module.exports = {generateToken, userVerify};