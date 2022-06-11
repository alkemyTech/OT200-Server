const { updatedPublicData } = require('../services/organization');

const updatedOrganizationData = async(req, res) => {

    const { body, params } = req;
    const { name, image, email, welcomeText, instagramUrl, facebookUrl, linkedinUrl } = body;

    try {
        
        const newData = await updatedPublicData(params.id, { 
            name, 
            image, 
            email, 
            welcomeText, 
            instagramUrl, 
            facebookUrl, 
            linkedinUrl 
        });
    
        res.status(200).json({error: false, message: 'ok', data:newData});
        
    } catch (error) {

        if( !error.status ) {

            return res.status(500).json( {error: true, message: 'Error en el servidor: ' + error.message} );
    
          }
    
        res.status(error.status).json( {error: true, message: error.message} );
    }

};



module.exports = {
    updatedOrganizationData,
}