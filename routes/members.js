var express = require('express');
const checkAdmin = require('../middleware/checkAdmin');
const verifyToken = require('../middleware/verifyToken');
var router = express.Router();

router.post('/', verifyToken, checkAdmin,  );

module.exports = router;