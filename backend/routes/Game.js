const express = require('express')
const router = express.Router()
const gameController = require('../controllers/Game')

router.get('/',gameController.getGames)
router.post('/',gameController.addGames)

module.exports = router