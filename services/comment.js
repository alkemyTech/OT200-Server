const db = require('../models');

const getAll = async () => {

    //ACLARO QUE AL HACER UNA PRUEBA DEVOLVIENDO SOLO UN STRING, LA RUTA FUNCIONA
    //EN ESTE CASO, AL PROBAR, ME DA UN ERROR, YA QUE NO EXISTE EL MODELO DE COMMENTS.
    //Pero el mismo probrado con activities funciona correctamente.
    const comments = await db.Comment.findAll({
        attributes: ['body'],
        order: [
            ['createdAt', 'DESC']
        ] 
    });

    return comments;

}

module.exports = getAll;