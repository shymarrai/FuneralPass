const express = require('express');
const UserController = require('../controllers/UserController');
const TransactionController = require('../controllers/TransactionController');
const AdminController = require('../controllers/AdminController');
require('dotenv').config()

const app = express();

// create application/x-www-form-urlencoded parser
app.use(express.json());
app.use(express.urlencoded());


app.get('/', UserController.logar)
app.post('/', UserController.login)

app.get('/logout', UserController.logout)

// app.use('/principal/:user:token', UserController.main)
app.use('/principal/:user/:token', UserController.main)

app.get('/new-account', UserController.register)
app.post('/new-account', UserController.save)

app.post('/save-transaction/:user/:token', TransactionController.saveTransaction)

app.get('/relatorio/:user/:token', AdminController.dash)
app.post('/generate/:user/:token', AdminController.generate)

app.get('/generate-pdf/:user/:token/:id', AdminController.generatePdf)

module.exports = app