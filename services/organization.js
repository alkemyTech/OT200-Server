const { Organization:DB } = require('../models');

const updatedPublicData = async( id, data ) => {

    const dataPublic = await DB.findByPk( id );

    if( !dataPublic ) throw { message:'La información solicitada no se encuentra en la Base de Datos', status:400 };

    await dataPublic.update( data );

    return dataPublic;

}

module.exports = {
    updatedPublicData,
}