const router = require('express').Router();


const homeRoutes = require('./home-routes.js');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/', homeRoutes);

module.exports = router;
