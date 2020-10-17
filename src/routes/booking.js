const { Router } = require('express')
const { getBookingByID,
  createBooking,
  putBooking,
  deleteBooking, getAllBooking } = require('../controllers/booking')
  const router = Router()

  router.get('/:id', getBookingByID)
  router.post('/', createBooking)
  router.put('/:id', putBooking)
  router.delete('/:id', deleteBooking)
  router.get('/users/:id', getAllBooking)

  module.exports = router