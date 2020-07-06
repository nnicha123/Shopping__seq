const express = require('express')
const router = express.Router()
const checkoutControllers = require('../controllers/CheckOut')

router.get('/',checkoutControllers.getCheckOuts)
router.post('/',checkoutControllers.addCheckOuts)

module.exports = router