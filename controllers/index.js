const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dasboard-routes');

const apiRoutes = require('./api ');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dasboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;