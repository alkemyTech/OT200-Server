const update = require('../services/user').update;


const updateUser = async (req, res) => {
    let id = req.params.id;
    let userData = req.body;

    try {
        
        const userUpd = await update(userData, id);

        return res.status(userUpd.id ? 200 : 400).json(userUpd)

    } catch (error) {
        
        return res.status(500).json({
            message: "An error has ocurred",
            error
        })

    }

}

module.exports = {
    updateUser
}