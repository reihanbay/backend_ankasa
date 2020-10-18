const { postUsersModel, checkUsersModel } = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {

  registerUsers: async (req, res) => {
    const { fullname, email, password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const encryptPass = bcrypt.hashSync(password, salt)
    const setData = {
      fullname,
      email,
      user_role: 1,
      password: encryptPass,
      createAt: new Date(),
      updateAt: new Date()

    }

    try {
      const emailUnique = await checkUsersModel(email)
      if (emailUnique.length >= 1) {
        // console.log(email);
        res.send({
          success: false,
          message: 'Email has been registered!'
        })
      } else {
        const result = await postUsersModel(setData)

        res.send({
          success: true,
          message: 'Success Register Account!',
          data: result
        })
      }
    } catch (error) {
      res.status(400).send({
        success: false,
        message: 'Bad request'
      })
    }
  },

  loginUsers: async (req, res) => {
    try {
      const { email, password } = req.body
      const checkDataUsers = await checkUsersModel(email)
      if (checkDataUsers.length >= 1) {
        const checkPass = bcrypt.compareSync(password, checkDataUsers[0].password)
        console.log(checkPass)
        if (checkPass) {
          const { id_user, user_role, fullname, email } = checkDataUsers[0]
          let payload = {
            id_user,
            user_role,
            fullname,
            email
          }
          console.log(payload)
          const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '2h' })
          payload = { ...payload, token }
          res.send({
            success: true,
            message: 'Success Login!',
            data: payload
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Wrong Password'
          })
        }
      } else {
        res.status(400).send({
          success: false,
          message: 'Email/Account was not registered!'
        })
      }
    } catch (error) {
      console.log(error)
      res.status(400).send({
        success: false,
        message: 'Bad Request'
      })
    }
  }
}
