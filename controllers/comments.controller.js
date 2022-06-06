const { request, response} = require('express');
const { createComment } = require('../services/comment');

const getComments = ( req = request, res = response )=> {

    res.status(200).json({ msg: 'getComments'});

}

const newComment = async(req = request, res = response ) => {
    
    const { post_id, user_id, body } = req.body;

    try {
        const comment = await createComment({ post_id, user_id, body }) 

        res.json({ error: false, message: 'El comentario se ah creado exitosamente', comment});

    } catch (error) {

        console.log(error.stack);
        res.status(500).json({ error: true, message: 'Error en el servidor, Comuniquese con el administrador', comment: null});
    }

};



module.exports = {
    getComments,
    newComment,
}