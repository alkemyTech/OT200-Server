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

    // const userDb = await getOne(id);

    // if (userDb.length === 0) {
    //     res.json("No existe el usuario")
    // } else {

    //     let firstName = user.firstName === undefined ? userDb.firstName : user.firstName;
    //     let lastName = user.lastName === undefined ? userDb.lastName : user.lastName;
    //     let email = user.email === undefined ? userDb.email : user.email;
    //     let password = user.password === undefined ? userDb.password : user.password;
    //     let photo = user.photo === undefined ? userDb.photo : user.photo;

    //     try {
    //         const userUpdated = await update({
    //             firstName, lastName, email,
    //             password, photo
    //         }, id);

    //         res.json(userUpdated);

    //     } catch (error) {
    //         res.status(500).json(error);
    //     }


    // }

}

module.exports = {
    updateUser
}