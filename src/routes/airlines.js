const { Router } = require('express')
const { getAirlinesByID, getAirlines, createAirlines, putAirlines, deleteAirlines, getSearchAirlines } = require('../controllers/airlines')
const router = Router()
const uploadImage = require('../middlewares/multer')

router.get('/:id', getAirlinesByID)
router.get('/search', getSearchAirlines)
router.get('/', getAirlines)
router.post('/', uploadImage, createAirlines)
router.put('/:id', uploadImage, putAirlines)
router.delete('/:id', uploadImage, deleteAirlines)

module.exports = router
