const { findAll, deleteOne } = require('../services/user');


const getAllUsers = async(req, res) => {

  try {

    const users = await findAll();

    res.status(200).json({error: false, message:'ok', users});
    
  } catch (error) {

    
    res.status(500).json({error: true, message:'Error en el servidor, comuniquese con el administrador', users:null});
    
  }
  };

const deleteUser = async(req, res) => {

    const id = parseInt(req.params.id);
    
    try {
        const userDeleted = await deleteOne (id);

        if (userDeleted === 0) {
            return res.status(404).json({
                error: true,
                message: "User nor found"
            })
        } else {
            
            return res.status(200).json({
                message: "User deleted",
                userId: id
            })
        }        

    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "An error has ocurred"
        })
    }
}


module.exports = {
    getAllUsers,
    deleteUser
}