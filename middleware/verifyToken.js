
const JWT = require('jsonwebtoken');
const secret = process.env.SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        res.status(401).send({error: "No se ha enviado el token de autenticación"});
    } else {
        JWT.verify(token, secret, async (error) => {
            if (error) {
                res.status(400).send({message: "Token invalido"});
            } else {
                try {
                    next();
                } catch (error) {
                    res.send(error);
                }
            }
        })
    }
}

module.exports = verifyToken;