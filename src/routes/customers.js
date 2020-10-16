const { Router } = require('express')
const {
  getCustomerByID,
  createCustomer,
  putCustomer,
  deleteCustomer
} = require('../controllers/customers')
const router = Router()
const {auth} = require('../middlewares/auth')
const uploadImage = require('../middlewares/multer')

router.get('/:id', getCustomerByID)
router.post('/', auth, uploadImage, createCustomer)
router.put('/:id',auth, uploadImage, putCustomer)
router.delete('/:id', deleteCustomer)

module.exports = router