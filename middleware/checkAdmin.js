const { request, response } = require('express');
const db = require('../models');

//Verifica si el usuario es adminitrador o no, de no serlo restringe su acceso
const checkAdmin = async( req = request, res = response, next ) => {

    //El rolId se encotraria en el JWT, se verificaria al solicitar el endpoint
      const rolUser = req.rolId;
    
    //Buscamos el registro en db referenciado al Adminstrador
      const rolAdmin = await db.Role.findOne({where: { name: 'Admin'} });
       
    //Se contrasta si el rolId pertenece a un admistrador
      if( rolUser !== rolAdmin.id ) {
        return res.status(403).json({ 
        msg: 'No tiene los permisos necesarios para acceder a esta información, comuniquese con admisntración'
        });
      }
    
      next();
    
    }

    module.exports = checkAdmin;