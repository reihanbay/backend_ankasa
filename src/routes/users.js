const { Router } = require('express')
const { registerUsers, loginUsers } = require('../controllers/users')
const router = Router()

router.post('/register', registerUsers)
router.post('/login', loginUsers)

module.exports = router
