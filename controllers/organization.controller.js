const {getPublicOrganizationService} = require('../services/organization');


const getPublicOrganization = async (req, res) => {
    
    try {
        const publicOrganization = await getPublicOrganizationService();

        return res.json(publicOrganization);

    }catch(error) {

        return res.status(500).json(error.message);
    }


}

module.exports = { getPublicOrganization };