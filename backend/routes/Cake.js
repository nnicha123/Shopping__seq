const express = require('express')
const router = express.Router()
const cakeController = require('../controllers/Cake')

router.get('/',cakeController.getCakes)
router.post('/',cakeController.addCakes)

module.exports = router