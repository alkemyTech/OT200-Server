var express = require('express');
var router = express.Router();

const { checkAdmin, verifyToken } = require('../middleware');
const { getAllUsers } = require('../controllers/users.controller');



router.get('/', verifyToken, checkAdmin, getAllUsers );


module.exports = router;
