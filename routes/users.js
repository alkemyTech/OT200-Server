var express = require('express');
var router = express.Router();

const { checkAdmin, verifyToken } = require('../middleware');
const { getAllUsers } = require('../controllers/users.controller');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', verifyToken, checkAdmin, getAllUsers );


module.exports = router;
