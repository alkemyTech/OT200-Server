const router = require('express').Router();
const usersRouter = require('./users');
const authRouter = require('./auth');
const membersRouter = require('./members');
const categoriesRouter = require('./categories');
const slidesRouter = require('./slides');
const testimonialsRouter = require('./testimonials');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/members', membersRouter);
router.use('/categories', categoriesRouter);
router.use('/slides', slidesRouter);
router.use('/testimonials', testimonialsRouter);


module.exports = router;
