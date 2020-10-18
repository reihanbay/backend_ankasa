const {
  getCustomerByIDModel,
  createCustomerModel,
  putCustomerModel,
  deleteCustomerModel
} = require('../models/customers')

module.exports = {
  getCustomerByID: async (req, res) => {
    const {
      id
    } = req.params
    try {
      const result = await getCustomerByIDModel(id)
      if (result.length) {
        res.send({
          success: true,
          message: `Data customer id user = ${id}`,
          data: result[0]
        })
      }
      else {
        res.send({
          success: false,
          message: `Data customer in user ${id} not found`
        })
      }
    }
    catch (error) {
      res.send({
        success: false,
        message: 'bad request!'
      })

    }
  },
  createCustomer: async (req, res) => {
    const {
      id_user,
      id_routes,
      username,
      phone,
      address,
      post_code
    } = req.body
    const setData = {
      id_user,
      id_routes,
      username,
      phone,
      address,
      post_code,
      image: req.file === undefined ? '' : req.file.filename
    }
    try {
      const result = await createCustomerModel(setData)
      res.status(201).send({
        success: true,
        message: 'Customer data has been created',
        data: result
      })
    }
    catch(error) {
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  putCustomer: async (req, res) => {
    const id = req.params.id
    const {
      id_user,
      id_routes,
      username,
      phone,
      address,
      post_code
    } = req.body
    const setData = {
      id_user,
      id_routes,
      username,
      phone,
      address,
      post_code,
      image: req.file === undefined ? '' : req.file.filename
    }
    try {
      const result = await putCustomerModel (id, setData)
      res.status(201).send({
        success: true,
        message: 'Customer data has been updated',
      })
    }
    catch(error){
      console.log(error);
      res.status(500).send({
        success: false,
        message: 'All field must be filled!'
      })
    }
  },
  deleteCustomer: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteCustomerModel(id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Item customer id ${id} has been deleted`
        })
    } else {
      res.send({
            message: 'Data not found!'
          })
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: 'bad request!'
    })
  }
}
}