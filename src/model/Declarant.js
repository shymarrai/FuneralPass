const mongoose = require('mongoose')

const declarantSchema = new mongoose.Schema({
  declarant_name: {type: String, default: "N/A"},
  declarant_cpf: {type: String, default: "N/A"},
  declarant_cel: {type: String, default: "N/A"},
  declarant_email: {type: String, default: "N/A"},
  declarant_parentLevel:{type: String, default: "N/A"},
  declarant_rg:{type: String, default: "N/A"},
  declarant_nameMother:{type: String, default: "N/A"},
  declarant_cep:{type: String, default: "N/A"},
  declarant_city:{type: String, default: "N/A"},
  declarant_state:{type: String, default: "N/A"},
  declarant_address:{type: String, default: "N/A"},
  declarant_complement:{type: String, default: "N/A"},
  declarant_number:{type: String, default: "N/A"},
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Declarant', declarantSchema)