const { findAll } = require('../services/user');

//Controllers:
const getAllUsers = async(req, res) => {

    const users = await findAll();

    res.status(200).json({msg:'ok', users});
  }




module.exports = {
    getAllUsers,
}