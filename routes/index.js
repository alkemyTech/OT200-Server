const router = require('express').Router();
const usersRouter = require('./users');
const authRouter = require('./auth');
const membersRouter = require('./members');
const testimonialsRouter = require('./testimonials');
const newsRouter = require('./news');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/members', membersRouter);
router.use('/testimonials', testimonialsRouter);
router.use('/news', newsRouter);


module.exports = router;
