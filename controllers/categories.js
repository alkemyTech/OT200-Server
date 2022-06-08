const deleteOne = require("../services/category");

const deleteOneCategory = async (req, res)=> {

    try {

        const {id} = req.params;
        
        const result = await deleteOne(id);

        if(result === 0) {
            return res.status(404).json({
                error: true,
                message: "Category not found"
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

module.exports = deleteOneCategory;
