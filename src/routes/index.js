const express = require('express');
require('dotenv').config()

const app = express();

// create application/x-www-form-urlencoded parser
app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
  return res.render('principal.ejs')
})

module.exports = app