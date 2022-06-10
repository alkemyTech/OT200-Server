const { request, response} = require('express');
const { createComment, allCommentsFromPost } = require('../services/comment');

const getComments = ( req = request, res = response )=> {

    res.status(200).json({ msg: 'getComments'});

}

const newComment = async(req = request, res = response ) => {
    
    const { post_id, user_id, body } = req.body;

    try {
        const comment = await createComment({ post_id, user_id, body }) 

        res.json({ error: false, message: 'El comentario se ah creado exitosamente', comment});

    } catch (error) {

        res.status(500).json({ error: true, message: 'Error en el servidor, Comuniquese con el administrador', comment: null});
    }

};


const getPostCommnets = async(req,res) => {

    const { id } = req.params;

try {

    const comments = await allCommentsFromPost( id );

    res.status(200).json({ error: false, message:'ok', comments});
    
} catch (error) {

    if( !error.status ) {
        return res.status(500).json({ error: true, message: 'Error en el servidor, comuniquese con el administrador', comments: null});
    }

    res.status(error.status).json({  error: true, message: error.message, comments: null });
}
};



module.exports = {
    getComments,
    newComment,
    getPostCommnets,
}