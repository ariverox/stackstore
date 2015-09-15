var router = require('express').Router()

var user = require('./users.js')
var products = require('./products.js')
var products = require('./transactions.js')


router.use('/users', user)


router.use('/products', products)

router.use('/transactions', transactions)

module.exports = router
