const express = require('express')
const UserController = require('./controllers/UserController')
const AddressesController = require('./controllers/AddressesController')

const routes = express.Router();

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.post('/addresses', AddressesController.store)

module.exports = routes