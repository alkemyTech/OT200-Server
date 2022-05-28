const { request, response } = require('express');
const { userRolAdmin } = require('../helpers')

//Verifica si el usuario es adminitrador o no, de no serlo restringe su acceso
const checkAdmin = async( req = request, res = response, next ) => {

    //El rolId se obtendria del user que viajaria en el JWT, se verificaria al solicitar el endpoint
      // const rolUser = 1;
      const rolUser = req.user.rolId;
    
    //Buscamos el registro en db referenciado al Adminstrador
      const rolAdmin = await userRolAdmin('admin');
       
    //Se contrasta si el rolId pertenece a un admistrador
      if( rolUser !== rolAdmin.id ) {
        return res.status(403).json({ 
        msg: 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración'
        });
      }
    
      next();
    
    }

    module.exports = checkAdmin;