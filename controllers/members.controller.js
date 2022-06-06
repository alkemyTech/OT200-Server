const { request, response } = require('express');
const find = require("./../services/member")

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


module.exports = {
    getMembers,
}