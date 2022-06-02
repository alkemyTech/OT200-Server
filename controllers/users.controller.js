const bcrypt = require('bcrypt');
const {findUser} = require('../services/auth');
const userToken = require('../middleware/userToken');

const userController = {
    login: (req, res) => {
        try{
            const {password } = req.body;
            
            const user = findUser(req.body);

            if(!user){
                return res.status(400).json({message: 'Usuario no encontrado', ok: false});
            }

            const isValidPassword = bcrypt.compareSync(password, user.password);

            if(!isValidPassword) res.status(401).json({message: 'Contraseña incorrecta', ok: false})

            const token = userToken.generateToken(user);

            return res.status(200).json({
                message: 'Login exitoso',
                token

            });
        }catch(error){
            return res.status(500).json({
                message: 'Error',
                data: error
            });
        }
    },
}

module.exports = userController