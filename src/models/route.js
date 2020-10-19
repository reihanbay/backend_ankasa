const db = require('../helpers/db')
module.exports = {
  getTrendingModel: (limit) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM routes ORDER BY RAND() LIMIT ${limit}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getTop10Model: (limit) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM routes LIMIT ${limit}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getAllLocationModel: (limit) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM routes limit ${limit}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createLocationModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO routes SET ?', body, (err, result, _field) => {
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
  }
}
