const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');
const {generateToken} = require('../middleware/userToken');

const userController = {
    login: (req, res) => {
        let validations = validationResult(req);
        if(validations.isEmpty()){
            const {email, password} = req.body;            
            try{            
                let user = await db.User.findOne({                    
                    where: {email}
                });            
                if(user){ 
                    const isValidPassword = await bcrypt.compareSync(password, user.password);
                    if(isValidPassword){                        
                        const token = generateToken(user);
                        res.status(200).json({
                            message: 'Login exitoso',
                            token
                        });
                    }else{                    
                        res.status(401).json({
                            ok: 'False',
                            message: 'Contraseña incorrecta'
                        });
                    }
                }else{                    
                    res.status(401).json({
                        ok: 'False',
                        message: 'Usuario no encontrado'
                    });
                }
            }catch(error){
                res.status(500).json({
                    message: 'Ocurrio un error',
                    error
                });
            }
        }
    }
}

module.exports = userController