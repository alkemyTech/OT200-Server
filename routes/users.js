var express = require('express');
var router = express.Router();
const update = require('../controllers/users.controller').updateUser;
const verifyToken = require('../middleware/verifyToken');
const checkAdmin = require('../middleware/checkAdmin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.patch('/:id', verifyToken, update);

module.exports = router;
