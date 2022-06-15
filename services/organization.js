const db = require('../models');

const getPublicOrganizationService = async() => {

    const publicOrganization = await db.Organization.findAll({attributes: ['name', 'image', 'phone', 'address']});

    if(!publicOrganization) {
        throw new Error("Error al obtener la organización");
    }

    return publicOrganization
        
}

module.exports = { getPublicOrganizationService };