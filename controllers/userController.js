const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

const userController = {
    login: (req, res) => {
        let validations = validationResult(req);

        if(!validations.isEmpty()){
            return res.status(400).json({
                message: 'Error',
            });
        }

        const {email, password} = req.body;

        try{
            let user = await db.User.findOne({
                where: {
                    email
                }
            });

            if(!user)res.status(404).json({message: 'Usuario no encontrado', ok: false});
        
            let isValidPassword = await bcrypt.compareSync(password, user.password);

            if(!isValidPassword) res.status(401).json({message: 'Contraseña incorrecta', ok: false});
            
            res.status(200).json({message: 'Login exitoso', data: {user, token}});

        }catch(error){
            return res.status(500).json({
                message: 'Error',
                data: error
            });
        }
    },
}

module.exports = userController