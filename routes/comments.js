const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const validatorHandler = require('../middlewares/validatorHandler');


router.post('/',

validatorHandler([
    check('news_id', 'El campo news_id es obligatorio').not().isEmpty(),
    check('user_id', 'El campo user_id es obligatorio').not().isEmpty(),
    check('body', 'El campo body es obligatorio').trim().not().isEmpty(),
]),

(req, res ) => {
    const { news_id, user_id, body } = req.body;
    res.json({msg: 'Crear comentario', news_id, user_id, body})
});




module.exports = router;