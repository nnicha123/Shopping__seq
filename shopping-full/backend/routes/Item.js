const express = require('express')
const router = express.Router()
const itemController = require('../controllers/Item')

router.get('/',itemController.getItems)
router.post('/',itemController.addItems)

module.exports = router