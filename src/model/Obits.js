const mongoose = require('mongoose')

const ObitSchema = new mongoose.Schema({
  obit_name:{type: String,default: "N/A" },
  obit_cpf:{type: String,default: "N/A" },
  obit_dateBirth:{type: String,default: "N/A" },
  obit_dateDeath:{type: String,default: "N/A" },
  obit_rg:{type: String, default: "N/A"},
  obit_color:{type: String, default: "N/A"},
  obit_sex:{type: String, default: "N/A"},
  obit_stepMark:{type: String, default: "N/A"},
  obit_civilState:{type: String, default: "N/A"},
  obit_typeDeath:{type: String, default: "N/A"},
  obit_nameMother:{type: String, default: "N/A"},
  obit_nameFather:{type: String, default: "N/A"},
  obit_local:{type: String, default: "N/A"},
  obit_finalization:{type: String,default: "N/A" },
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Obit', ObitSchema)