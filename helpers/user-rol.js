const db = require('../models');

//Consulta por un rol en la DB
const userRolAdmin = async( rol ) => {

const userRol = await db.Role.findOne({ where: { name: rol } });

//Si el rol no existe devuelve un error en consola.
if( !userRol ) throw new Error(`El Rol ${rol} no existe en la base de datos, comuniquese con el administrador`);

return userRol;

}

module.exports = {
    userRolAdmin 
}