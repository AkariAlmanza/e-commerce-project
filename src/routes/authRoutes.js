const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/get-allusers', authController.getAllUsers)
router.delete('/delete-user/:id', authController.deleteUser)
router.put('/update-user/:id',  authController.updateUser)

module.exports = router 