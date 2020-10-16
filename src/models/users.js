const db = require('../helpers/db')


module.exports = {
  
    postUsersModel: (setData) => {
    return new Promise ((resolve, reject)=>{
      db.query('INSERT INTO users SET ?', setData, (error, result)=>{
        if(error) {
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
    return new Promise ((resolve, reject)=>{
        console.log(email);
      db.query('SELECT id_user, fullname, email, password FROM users WHERE email = users.email', email, (error, result) =>{
        console.log(error);
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}