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
  


module.exports = generateToken;