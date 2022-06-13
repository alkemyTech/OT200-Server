const getAll = require("../services/organizations");

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


module.exports = getOrganizations;