const {
  getTrendingModel,
  getTop10Model,
  getAllLocationModel,
  createLocationModel
} = require('../models/route')

module.exports = {
  getTrending: async (req, res) => {
    let {
      limit
    } = req.query
    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }
    try {
      const result = await getTrendingModel(limit)
      if (result.length) {
        res.send({
          success: true,
          message: 'List trending',
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: true,
        message: 'There is no item on list'
      })
    }
  },
  getTop10: async (req, res) => {
    let {
      limit
    } = req.query
    if (!limit) {
      limit = 10
    } else {
      limit = parseInt(limit)
    }
    try {
      const result = await getTop10Model(limit)
      if (result.length) {
        res.send({
          success: true,
          message: 'List top 10',
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: true,
        message: 'There is no item on list'
      })
    }
  },
  getAllLocation: async (req, res) => {
    let {
      limit
    } = req.query
    if (!limit) {
      limit = 500
    } else {
      limit = parseInt(limit)
    }
    try {
      const result = await getAllLocationModel(limit)
      if (result.length) {
        res.send({
          success: true,
          message: 'List all location',
          data: result
        })
      }
    } catch (error) {
      res.send({
        success: true,
        message: 'There is no item on list'
      })
    }
  },
  createLocation: async (req, res) => {
    const {
      city,
      country
    } = req.body
    const setData = {
      city,
      country,
      image: req.file === undefined ? '' : req.file.filename
    }
    try {
      const result = await createLocationModel(setData)
      res.status(201).send({
        success: true,
        message: 'Location data has been created',
        data: result
      })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  }
}
