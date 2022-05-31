const { request, response } = require('express');

const getMembers = ( req = request, res = response  ) => {

    res.status(200).json({ msg: 'getMembers'});

}


module.exports = {
    getMembers,
}