const db = require('../helpers/db')
module.exports = {
  getBookingByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT airlines.init_origin, airlines.init_destination, status, users.fullname, airlines.class_airlines, airlines.time_departure, airlines.time_from, airlines.code, airlines.terminal, airlines.image FROM booking JOIN airlines ON booking.id_airlines=airlines.id_airlines JOIN users ON booking.id_user=users.id_user WHERE id_booking = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  createBookingModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO booking SET ?', body, (err, result, _field) => {
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
  putBookingModel: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE booking SET ? WHERE id_booking ='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deleteBookingModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM booking WHERE id_booking = '${id}'`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getAllBookingModel: (limit, offset, id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT airlines.time_departure, airlines.time_from, airlines.init_origin, airlines.init_destination, airlines.name_airlines, airlines.code, booking.status, booking.total_price FROM booking JOIN airlines ON booking.id_airlines=airlines.id_airlines WHERE booking.id_user=${id} LIMIT ${limit} OFFSET ${offset}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}
