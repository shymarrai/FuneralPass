const mongoose = require('mongoose')

const declarantSchema = new mongoose.Schema({
  declarant_name: {type: String, required: true, minlength:3, maxlength:30},
  declarant_cpf: {type: String, required: true, minlength:3, maxlength:14},
  declarant_cel: {type: String, required: true, minlength:13},
  declarant_email: {type: String},
  declarant_parentLevel:{type: String, required: true},
  declarant_rg:{type: String},
  declarant_nameMother:{type: String},
  declarant_cep:{type: String},
  declarant_city:{type: String},
  declarant_state:{type: String},
  declarant_address:{type: String},
  declarant_complement:{type: String},
  declarant_number:{type: String},
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Declarant', declarantSchema)