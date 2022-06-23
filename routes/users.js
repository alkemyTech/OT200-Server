var express = require('express');
var router = express.Router();

const { checkAdmin, verifyToken } = require('../middleware');
const { getAllUsers, deleteUser } = require('../controllers/users.controller');




router.get('/', verifyToken, checkAdmin, getAllUsers );


router.delete('/:id', verifyToken, deleteUser );


module.exports = router;
