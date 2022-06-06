const create = require("../services/user");
const {findUser} = require('../services/auth');
const userToken = require('../middleware/userToken');

const createUser = async (req, res) => {
    try {

        const data = req.body;
        const newUser = await create(data)
        
        return res.json(newUser);

    } catch (error) {

        return res.status(500).json({
            error: true,
            message: "Something was wrong",
        });
    }
};

const loginUser = async (req, res) => {
    try{
        const {password, email} = req.body;
        
        const user = findUser(email);

        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado', ok: false});
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
}

module.exports = {
    createUser, loginUser
};
