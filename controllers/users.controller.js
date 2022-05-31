const bcrypt = require('bcrypt');
const findUser = require('../services/auth');

const userController = {
    login: (req, res) => {
        try{
            const {password} =  req.body;
            
            const user = findUser(req.body.email);      
          
            if(!user)res.status(404).json({message: 'Usuario no encontrado', ok: false});

            let isValidPassword = bcrypt.compareSync(password, user.password);

            if(!isValidPassword) res.status(401).json({message: 'Contraseña incorrecta', ok: false});
            

            res.status(200).json({message: 'Login exitoso', user: user});

        }catch(error){
            return res.status(500).json({
                message: 'Error',
                data: error
            });
        }
    },
}

module.exports = userController