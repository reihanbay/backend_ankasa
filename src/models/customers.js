const db = require('../helpers/db')
module.exports = {
  getCustomerByIDModel: (id) => {
    return new Promise((resolve, reject)=> {
      db.query(`SELECT *, routes.city, users.fullname FROM customers JOIN routes ON customers.id_routes=routes.id_routes JOIN users ON customers.id_user=users.id_user WHERE customers.id_user = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createCustomerModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO customers SET ?', body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          const newResult = {
            id: result.insertId,
            ...body
          }
          resolve(newResult)
        }
      })
    })
  },
  putCustomerModel: (id, body) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE customers SET ? WHERE id_customer='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteCustomerModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM customers WHERE id_customer = '${id}'`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}
