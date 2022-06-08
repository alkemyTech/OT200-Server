const { request, response } = require('express');
const {find, deleteOne} = require("./../services/member")

const getMembers = async ( req = request, res = response  ) => {

    try {

        const members = await find();

        return res.json(members);

    } catch (error) {

        return res.status(500).json({
            error: true,
            message: "Something was wrong"
        })
        
    }

}

const deleteOneMember = async (req ,res) => {

    try {

        const {id} = req.params;
        
        const result = await deleteOne(id);

        if(result === 0) {
            return res.status(404).json({
                error: true,
                message: "Member not found"
            })
        }
    
        return res.json({
            message: "Deleted",
            id
        })
        
    } catch (error) {

        return res.status(500).json({
            error: true,
            message: "Something went wrong"
        })
    }
}


module.exports = {
    getMembers,
    deleteOneMember
}