const { getAll, updatedPublicData } = require("../services/organizations");

const getOrganizations = async (req, res) => {

    try {

        const organizations = await getAll();

        return res.json(organizations);      

    } catch (error) {
      
        return res.status(500).json({            
            error: true,
            message: "Something went wrong"
        })

    }

}



const updatedOrganizationData = async(req, res) => {

    const { body, params } = req;
    const { name, image, email, welcomeText, instagramUrl, facebookUrl, linkedinUrl } = body;

    try {
        
         await updatedPublicData(params.id, { 
            name, 
            image, 
            email, 
            welcomeText, 
            instagramUrl, 
            facebookUrl, 
            linkedinUrl 
        });
    
        res.status(200).json({error: false, message: 'El registro se actualizo exitosamente'});
        
    } catch (error) {

        if( !error.status ) {

            return res.status(500).json( {error: true, message: 'Error en el servidor: ' + error.message} );
    
          }
    
        res.status(error.status).json( {error: true, message: error.message} );
    }

};


module.exports = {
    getOrganizations,
    updatedOrganizationData
};