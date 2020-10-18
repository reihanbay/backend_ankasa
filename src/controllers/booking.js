const { Router } = require('express')
const {
  getBookingByIDModel,
  createBookingModel,
  putBookingModel,
  deleteBookingModel,
  getAllBookingModel
} = require('../models/booking')

module.exports = {
  getBookingByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getBookingByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data booking id ${id}`,
          data: result[0]
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: `Data booking ${id} not found`
      })
    }
  },
  createBooking: async (req, res) => {
    const body = req.body
    try {
      const result = await createBookingModel(body)
      res.status(201).send({
        success: true,
        message: 'Booking data has been created',
        data: result
      })
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  putBooking: async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
      const result = await putBookingModel(body, id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Booking with id ${id} has been updated`
        })
      } else {
        res.send({
          success: false,
          message: 'Failed to update data!'
        })
      }
    } catch (error) {
      res.send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteBooking: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteBookingModel(id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Item booking id ${id} has been deleted`
        })
      } else {
        res.send({
          message: 'Data not found!'
        })
      }
    } catch (error) {
      console.log(error)
      res.send({
        success: false,
        message: 'bad request!'
      })
    }
  },
  getAllBooking: async (req, res) => {
    const { id } = req.params
    let {
      page,
      limit
    } = req.query
    if (!limit) {
      limit = 30
    } else {
      limit = parseInt(limit)
    }

    if (!page) {
      page = 1
    } else {
      page = parseInt(page)
    }

    const offset = (page - 1) * limit
    try {
      const result = await getAllBookingModel(limit, offset, id)
      if (result.length) {
        res.send({
          success: true,
          message: 'List booking',
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: true,
        message: 'There is no item on list'
      })
    }
  }
}
