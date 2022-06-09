const create = require("../services/user");

// const subject = "Bienvenidos a la ONG Somos Más";
// const emailText = "Hola, te damos la bienvenida a la ONG Somos Más, esperamos que disfrutes de nuestros servicios.";
// const contactInfo = "Para contactar con nosotros, puedes enviarnos un correo a: somosfundacionmas@gmail.com, Instagram: @somosfundacionmas, Facebook: Somos_Más, o por teléfono: 1160112988";


const createUser = async (req, res) => {
    try {

        const data = req.body;
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

module.exports = {
    createUser,
};
