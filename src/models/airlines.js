const db = require('../helpers/db')
module.exports = {

  getAirlinesByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM airlines WHERE id_airlines = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },

  getAirlinesModel: (limit, offset, id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT airlines.id_airlines, airlines.name_airlines, airlines.price_child, airlines.price_adult, airlines.code, airlines.init_origin, airlines.init_destination, airlines.time_from, airlines.time_destination, airlines.terminal, airlines.class_airlines, airlines.facilities, airlines.time_departure, des.city as code_route_origin, dep.city as code_route_destination, a.country as country_origin, b.country as country_destination FROM airlines JOIN routes des ON airlines.id_route_origin=des.id_routes JOIN routes dep ON airlines.id_route_destination=dep.id_routes JOIN routes a ON airlines.id_route_origin=a.id_routes JOIN routes b ON airlines.id_route_destination=b.id_routes', (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },

  createAirlinesModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO airlines SET ?', body, (err, result, _field) => {
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

  putAirlinesModel: (id, body) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE airlines SET ? WHERE id_airlines='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },

  deleteAirlinesModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM airlines WHERE id_airlines = '${id}'`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  getSearchAirlinesModel: (searchOrigin, searchDestination, searchClass, searchDeparture) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT des.city as code_route_origin, dep.city as code_route_destination, a.country as country_origin, b.country as country_destination, airlines.time_departure, airlines.class_airlines FROM airlines JOIN routes des ON airlines.id_route_origin=des.id_routes JOIN routes dep ON airlines.id_route_destination=dep.id_routes JOIN routes a ON airlines.id_route_origin=a.id_routes JOIN routes b ON airlines.id_route_destination=b.id_routes WHERE des.city LIKE '%${searchOrigin}%' and dep.city LIKE '%${searchDestination} and airlines.time_departure LIKE '%${searchDeparture} and airlines.class_airlines LIKE '%${searchClass}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}
