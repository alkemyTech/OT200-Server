const { findAll } = require('../services/user');


const getAllUsers = async(req, res) => {

  try {

    const users = await findAll();

    res.status(200).json({error: false, message:'ok', users});
    
  } catch (error) {

    
    res.status(500).json({error: true, message:'Error en el servidor, comuniquese con el administrador', users:null});
    
  }
  };




module.exports = {
    getAllUsers,
}