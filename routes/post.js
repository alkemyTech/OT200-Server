const { Router } = require('express');
const router = Router();

const { verifyToken } = require('../middleware');
const { getPostCommnets } = require('../controllers/comments.controller');


router.get('/:id/comments',verifyToken, getPostCommnets );



module.exports = router;