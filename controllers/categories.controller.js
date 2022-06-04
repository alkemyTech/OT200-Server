const deleteOne = require("../services/category");

const deleteOneCategory = async (req, res)=> {

    try {

        const {id} = req.params;
        
        await deleteOne(id);
    
        return res.json({
            message: "deleted",
            id
        })
        
    } catch (error) {        

        return res.status(404).json({
            error: true,
            message: error.message
        })
    }
}

module.exports = deleteOneCategory;
