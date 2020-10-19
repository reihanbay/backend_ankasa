const { Router } = require('express')
const { getAirlinesByIDModel, getAirlinesModel, createAirlinesModel, putAirlinesModel, deleteAirlinesModel, getSearchAirlinesModel } = require('../models/airlines')

module.exports = {
    getAirlinesByID: async(req, res) => {
        const { id } = req.params
    
        try {
            const result = await getAirlinesByIDModel(id)
            if( result.length ) {
                res.send({
                    success: true,
                    message: `Data Airlines id ${id}`,
                    data: result[0]
                })
            } else {
              res.send({
                success: false,
                message: `Data Airlines ${id} not found`
            })
            }
        }
        catch ( error ) {
            res.send({
                success: false,
                message: 'bad request!'
            })
        }
    },

    getAirlines: async (req, res) => {
        const {id} = req.params
        let {page, limit} = req.query
        if(!limit) {
            limit = 30
        } else {
            limit = parseInt(limit)
        }

        if(!page) {
            page = 1
        } else {
            page = parseInt(page)
        }

        const offset = (page - 1) * limit
        try {
            const result = await getAirlinesModel(limit, offset, id)
            if (result.length) {
                res.send({
                    success: true,
                    message: 'List Airlines',
                    data: result
                })
              } else {
                res.send({
                  success: false,
                  message: `Data Airlines ${id} not found`
              })
              }
        } catch (error) {
            console.log(error);
            res.send({
                success: true,
                message: 'Bad Request'
            })
        }
    },

    createAirlines: async (req, res) => {
        
        const {
            id_airlines,
            name_airlines,
            price_child,
            price_adult,
            code,
            id_route_origin,
            id_route_destination,
            init_origin,
            init_destination,
            time_from,
            time_destination,
            terminal,
            class_airlines,
            facilities,
            time_departure
        } = req.body
        
        const setData = {
            id_airlines,
            name_airlines,
            price_child,
            price_adult,
            code,
            id_route_origin,
            id_route_destination,
            init_origin,
            init_destination,
            time_from,
            time_destination,
            terminal,
            class_airlines,
            facilities,
            time_departure,
            image: req.file === undefined ? '' : req.file.filename
        }
        
        try {
            const result = await createAirlinesModel(setData)
            res.status(201).send({
                success: true,
                message: 'Airlines data has been created',
                data: result
            })
        } catch(error) {
            console.log(error);
            res.status(500).send({
              success: false,
              message: 'All field must be filled!'
            })
          }
    },

    putAirlines: async (req, res) => {
        
        const {
            id_airlines,
            name_airlines,
            price_child,
            price_adult,
            code,
            id_route_origin,
            id_route_destination,
            init_origin,
            init_destination,
            time_from,
            time_destination,
            terminal,
            class_airlines,
            facilities,
            time_departure
        } = req.body

        const setData = {
            id_airlines,
            name_airlines,
            price_child,
            price_adult,
            code,
            id_route_origin,
            id_route_destination,
            init_origin,
            init_destination,
            time_from,
            time_destination,
            terminal,
            class_airlines,
            facilities,
            time_departure,
            image: req.file === undefined ? '' : req.file.filename
        }

        try {
            const result = await putAirlinesModel (id, setData)
            res.status(201).send({
              success: true,
              message: 'Airlines data has been updated',
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

    deleteAirlines: async (req, res) => {
        const id = req.params.id
        try {
            const result = await deleteAirlinesModel(id)
            if (result.affectedRows) {
                res.send({
                    success: true,
                    message: 'Item Airlines id ${id} has been delete'
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
     },

     getSearchAirlines: async (req, res) => {
    
      let {searchOrigin, searchDestination, searchDeparture, searchClass } = req.query

     try {
       const result = await getSearchAirlinesModel(searchOrigin, searchDeparture, searchDestination, searchClass)
       if (result.length) {
        res.send({
          success: true,
          message: 'List airlines',
          data: result
        })
      }
    } catch (error) {
      console.log(error)
      res.send({
        success: true,
        message: 'There is no item on list'
      })
    }
  },

  deleteAirlinesModel: async (req, res) => {
    const id = req.params.id
    try {
      const result = await deleteAirlinesModel(id)
      if (result.affectedRows) {
        res.send({
          success: true,
          message: `Item Airlines id ${id} has been delete`
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
  }

}
