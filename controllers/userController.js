const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const {generateToken} = require('../middleware/userToken');
const findUser = require('../services/auth');

const userController = {
    login: (req, res) => {
        let validations = validationResult(req);

        if(!validations.isEmpty()){
            return res.status(400).json({
                message: 'Error',
            });
        }

        const {password} = req.body;

        try{
            
            if(!findUser)res.status(404).json({message: 'Usuario no encontrado', ok: false});
        
            let isValidPassword = await bcrypt.compareSync(password, findUser.password);

            if(!isValidPassword){
                return res.status(400).json({
                    message: 'Contraseña incorrecta',
                    ok: false
                })
            }else{
                let token = generateToken(findUser);                

                res.status(200).json({
                    message: 'Login exitoso',
                    token
                })
            }  
        }
        catch(error){
            return res.status(500).json({
                message: 'Error',
                data: error
            });
        }
    },
}

module.exports = userController