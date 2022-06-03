var express = require('express');
var router = express.Router();

const { getAllUsers } = require('../controllers/users.controller');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', getAllUsers )

module.exports = router;
