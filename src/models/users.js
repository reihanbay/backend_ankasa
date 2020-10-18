const db = require('../helpers/db')

module.exports = {

  postUsersModel: (setData) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users SET ?', setData, (error, result) => {
        if (error) {
          reject(new Error(error))
        } else {
          const newResult = {
            id: result.insertId,
            ...setData
          }
          delete newResult.password
          resolve(newResult)
        }
      })
    })
  },

  checkUsersModel: (email) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE email = ?', email, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}
