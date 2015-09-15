'use strict';



var router = require('express').Router();

module.exports = router;

router.use('/members', require('./members'));
router.use('/products', require('../'))

router.use('/users', require('./api/users'))
router.use('/products', require('./api/products'))
router.use('/orders', require('./api/orders'))




// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
