const express = require('express')

const router = new express.Router()

//import controllers
const userController = require('./Controllers/userController')
const jwtMiddlewareToken = require('./Middleware/jwtMiddleware')
const contactController = require('./Controllers/contactController')
const adminController = require('./Controllers/adminController')

//register path
router.post('/register',userController.registerController)

//login path
router.post('/login',userController.loginController)

//contact path/admin login
router.post('/contact',jwtMiddlewareToken,contactController.contact)

//admin  get all dertails
router.get('/admin',jwtMiddlewareToken,adminController.adminpage)

router.delete('/delete-details/:id',jwtMiddlewareToken,adminController.deleteContact)


module.exports = router