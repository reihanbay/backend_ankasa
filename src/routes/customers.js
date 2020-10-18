const { Router } = require('express')
const {
  getCustomerByID,
  createCustomer,
  putCustomer,
  deleteCustomer
} = require('../controllers/customers')
const router = Router()
const { authorization } = require('../middlewares/auth')
const uploadImage = require('../middlewares/multer')

router.get('/:id', getCustomerByID)
router.post('/', authorization, uploadImage, createCustomer)
router.put('/:id', authorization, uploadImage, putCustomer)
router.delete('/:id', deleteCustomer)

module.exports = router
