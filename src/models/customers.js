const db = require('../helpers/db')
module.exports = {
  getCustomerByIDModel: (id) => {
    return new Promise((resolve, reject)=> {
      db.query(`SELECT * FROM customers WHERE id_user = ${id}`, (err, result, _field) => {
        if(err) {
          reject(new Error(err))
        }
        else {
          resolve(result)
        }
      })
    })
  },
  createCustomerModel: (body) => {
    return new Promise((resolve, reject)=>{
      db.query(`INSERT INTO customers SET ?`, body, (err, result, _field)=>{
        if(err) {
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
    // console.log(body);
    return new Promise ((resolve, reject) =>{
      db.query(`UPDATE customers SET ? WHERE id_customer='${id}'`, body, (err, result, _field) => {
        // console.log(result);
        if(err) {
          reject(new Error(err))
        }
        else {
          resolve(result)
        }
      })
    })
  },
  deleteCustomerModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM customers WHERE id_customer = '${id}'`, (err, result, _field)=>{
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}