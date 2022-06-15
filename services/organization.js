const { Organization:DB } = require('../models');

const updatedPublicData = async( id, data ) => {

    const dataPublic = await DB.update( data, { where: { id : id }} );

    

    if( dataPublic[0] === 0 ) throw { message:'La información solicitada no se encuentra en la Base de Datos', status:404 };


    return;

}

module.exports = {
    updatedPublicData,
}