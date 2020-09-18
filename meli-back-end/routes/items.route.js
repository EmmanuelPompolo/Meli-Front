var express = require('express')
var router = express.Router()
const { searchItems, searchItem } = require('../controllers/items.controller')

router.get('', searchItems)
router.get('/:id', searchItem)

module.exports = router
