const { request, response} = require('express');
const { createComment, changeComment, allCommentsFromPost } = require("../services/comment");


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

const updateComment = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await changeComment(req.body, id);
        return res.status(comment.id ? 200 : 404).json(comment);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


const getPostCommnets = async(req,res) => {

    const { id } = req.params;

try {

    const comments = await allCommentsFromPost( id );

    if( comments.length === 0  ) return res.status(200).json({ error: false, message:'No se encontraron comentarios en este post', comments});

    res.status(200).json({ error: false, message:'ok', comments});
    
} catch (error) {

    res.status(500).json({ error: true, message: 'Error en el servidor: ' + error.message, comments: null});
    
}
};



module.exports = {
    getComments,
    newComment,
    updateComment,
    getPostCommnets,
}