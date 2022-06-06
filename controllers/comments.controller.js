const { request, response} = require('express');

const getComments = ( req = request, res = response )=> {

    res.status(200).json({ msg: 'getComments'});

}



module.exports = {
    getComments,
}