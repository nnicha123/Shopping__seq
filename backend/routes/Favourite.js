const express = require('express')
const router = express.Router()
const favouriteController = require('../controllers/Favourite')

router.get('/',favouriteController.getFavourites)
router.post('/',favouriteController.addFavourites)

module.exports = router