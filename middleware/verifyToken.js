
const JWT = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        res.status(401).send({ error: "No se ha enviado el token de autenticación" });
    } else {
        JWT.verify(token, process.env.SECRET, async (error, user) => {
            if (error) {
                res.status(400).send({ message: "Token invalido" });
            };
            req.user = user;
            next();
        })
    }
}

module.exports = verifyToken;