const { Router } = require('express')
const {
  getTrending,
  getTop10,
  getAllLocation,
  createLocation
} = require('../controllers/route')
const router = Router()
const uploadImage = require('../middlewares/multer')

router.get('/trending/', getTrending)
router.get('/top10/', getTop10)
router.get('/', getAllLocation)
router.post('/', uploadImage, createLocation)

module.exports = router