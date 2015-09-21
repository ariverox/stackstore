'use strict';



var router = require('express').Router();


router.use('/members', require('./members'));


router.use('/users', require('./api/users'))
router.use('/products', require('./api/products'))
router.use('/orders', require('./api/orders'))

router.use('/reviews', require('./api/reviews'))



// Make sure this is after all of
// the registered routes!

router.use(function (req, res) {
    res.status(404).end();
});
module.exports = router;
