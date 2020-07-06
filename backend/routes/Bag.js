const express = require('express')
const router = express.Router()
const bagController = require('../controllers/Bag')

router.get('/',bagController.getBags)
router.post('/',bagController.addBags)

module.exports = router