const {create} = require("../services/user");
const findUser = require('../services/auth');
const bcrypt = require('bcrypt');
const userToken = require('../middleware/userToken');

// const subject = "Bienvenidos a la ONG Somos Más";
// const emailText = "Hola, te damos la bienvenida a la ONG Somos Más, esperamos que disfrutes de nuestros servicios.";
// const contactInfo = "Para contactar con nosotros, puedes enviarnos un correo a: somosfundacionmas@gmail.com, Instagram: @somosfundacionmas, Facebook: Somos_Más, o por teléfono: 1160112988";


const createUser = async (req, res) => {
    try {
        const data = req.body;
        data.roleId = 2;

        const newUser = await create(data)

        // en la funcion welcomeMail agregar los parametros emailTitle=data.firstName, emailText, contactInfo, email y subject.
        
        return res.status(201).json(newUser);

    } catch (error) {

        return res.status(500).json({
            error: true,
            message: "Something was wrong",
        });
    }
};

const loginUser = async (req, res) => {    
    try{
        const {email, password} = req.body;

        const user = await findUser(email);

        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado', ok: false});
        }
        
        const isValidPassword = bcrypt.compareSync(password, user.password);
        
        if(!isValidPassword) res.status(401).json({message: 'Contraseña incorrecta', ok: false})

        const token = userToken(user);

        return res.status(200).json({
            message: 'Login exitoso',
            user,
            token
        });   
    }catch(error){
        return res.status(500).json({
            message: error.message,
            data: error
        });
    }
}

module.exports = {
    createUser, loginUser
};
