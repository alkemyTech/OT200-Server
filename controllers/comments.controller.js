const { request, response} = require('express');
const { createComment, findId, deleteOne } = require('../services/comment');

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

const deleteComment = async (req, res) => {

    const id = parseInt(req.params.id)

    try {

        // const id = parseInt(req.params.id);

        const commentDb = await findId(id);

        if (commentDb === null) {
            
            return res.status(404).json({
                message: "Comment not found",
                commentDb
            })

        } else {
            
            const deletedComment = await deleteOne(id);

            return res.status(200).json({
                message: "Deleted",
                id: id
            })

        }

        
    } catch (error) {
        
        console.log(error)
        return res.status(500).json({
            error:true,
            message: "An error has ocurred"
        })

    }

}



module.exports = {
    getComments,
    newComment,
    deleteComment
}