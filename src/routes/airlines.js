const { Router } = require('express')
const { getAirlinesByIDModel, getAirlinesModel, createAirlinesModel, putAirlinesModel, deleteAirlinesModel } = require('../controllers/airlines')
const router = Router()
const uploadImage = require('../middlewares/multer')

router.get('/:id', getAirlinesByIDModel)
router.get('/', getAirlinesModel)
router.post('/', uploadImage, createAirlinesModel)
router.put('/:id', uploadImage, putAirlinesModel)
router.delete('/:id', uploadImage, deleteAirlinesModel)

module.exports = router
