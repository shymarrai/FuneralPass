const mongoose = require('mongoose')

const ObitSchema = new mongoose.Schema({
  obit_name:{type: String, required: true},
  obit_cpf:{type: String, required: true},
  obit_dateBirth:{type: String, required: true},
  obit_dateDeath:{type: String, required: true},
  obit_rg:{type: String},
  obit_color:{type: String},
  obit_sex:{type: String},
  obit_stepMark:{type: String},
  obit_civilState:{type: String},
  obit_typeDeath:{type: String},
  obit_nameMother:{type: String},
  obit_nameFather:{type: String},
  obit_local:{type: String},
  obit_finalization:{type: String, required: true},
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Obit', ObitSchema)