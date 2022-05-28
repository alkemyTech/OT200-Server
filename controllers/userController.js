const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const findUser = require('../services/findId');

const userController = {
    login: (req, res) => {
        let validations = validationResult(req);

        if(!validations.isEmpty()){
            return res.status(400).json({
                message: 'Error',
            });
        }

        try{
            const {password} =  req.body;

            if(!findUser)res.status(404).json({message: 'Usuario no encontrado', ok: false});
        
            let isValidPassword = await bcrypt.compareSync(password, findUser.password);

            if(!isValidPassword) res.status(401).json({message: 'Contraseña incorrecta', ok: false});
            
            res.status(200).json({message: 'Login exitoso', user: findUser});

        }catch(error){
            return res.status(500).json({
                message: 'Error',
                data: error
            });
        }
    },
}

module.exports = userController