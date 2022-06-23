const db = require("./../models/");

const getAll = async () => {

    const organizations = await db.Organization.findAll({
        attributes: ["facebookUrl", "instagramUrl", "linkedinUrl"],
    });

    return organizations;
}

const updatedPublicData = async( id, data ) => {

    const dataPublic = await db.Organization.update( data, { where: { id : id }} );

    

    if( dataPublic[0] === 0 ) throw { message:'La información solicitada no se encuentra en la Base de Datos', status:404 };


    return;

};

module.exports = {
    getAll,
    updatedPublicData
};