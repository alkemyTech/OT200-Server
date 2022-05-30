const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');


router.post('/categories',
[
    check('name', 'El campo name es obligatorio').trim().not().isEmpty().isString(),
], 
(req, res ) => {
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }
   const { name } = req.body;
    res.json({ msg:'Crear categoria', name})
});




module.exports = router;