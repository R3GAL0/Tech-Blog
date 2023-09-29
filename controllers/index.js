const router = require('express').Router();

const routes = require('./mainRoutes');
const api = require('./api');
const authRoutes = require('./authRoutes.js');
// const homeRoutes = require('./homeRoutes');

router.use('/', routes);
router.use('/dashboard', authRoutes)
router.use('/api', api);
// router.use('/api', apiRoutes);

module.exports = router;
