const router = require('express').Router();
const usersRouter = require('./users');
const authRouter = require('./auth');
const membersRouter = require('./members');
const categoriesRouter = require('./categories');
const commentsRouter = require('./comments');
const slidesRouter = require('./slides');
const testimonialsRouter = require('./testimonials');
const commentsRouter = require('./comments');
const newsRouter = require('./news');
const activitiesRouter = require('./activities')
const organizationRouter = require('./organization');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/members', membersRouter);
router.use('/categories', categoriesRouter);
router.use('/news', newsRouter);
router.use('/comments', commentsRouter);
router.use('/slides', slidesRouter);
router.use('/testimonials', testimonialsRouter);
router.use('/comments', commentsRouter);
router.use('/news', newsRouter);
router.use('/activities',activitiesRouter)
router.use('/organization', organizationRouter);


module.exports = router;
