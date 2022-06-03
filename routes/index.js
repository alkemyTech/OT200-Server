const router = require('express').Router();
const usersRouter = require('./users');
const authRouter = require('./auth');
const membersRouter = require('./members');
const commentsRouter = require('./comments');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/members', membersRouter);
router.use('/comments', commentsRouter);


module.exports = router;
