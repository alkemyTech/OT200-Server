const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

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
                        res.status(200).json({
                            message: 'Login exitoso',
                            user: user
                        });
                    }else{
                        res.status(401).json({
                            ok: 'False'
                        });

                    }
                }else{
                    res.status(401).json({
                        ok: 'False'
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