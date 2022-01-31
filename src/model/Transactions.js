const mongoose = require('mongoose')

const transanctionSchema = new mongoose.Schema({
  declarant_id: {type: String, required: true},
  services_id:{type: String, required: true},
  obit_id:{type: String, required: true},

  seller_name:{type: String}, // nome do vendedor

  user_name: {type: String, required: true},
  user_username: {type: String, required: true}, // info da conta usada para a venda

  services_advice:{type: String, required: true}, //valor da venda
  services_taxes:{type: String, default:"8"}, //impostos
  services_taxes_adverses:{type: String}, //taxas diversas
  services_costs:{type: String}, //Custo dos Serviços
  services_profit:{type: String}, //lucro liquido
  
  declarant_name:{type: String},
  obit_name:{type: String},
  services_servicesNames:[
    "String",// nomes dos serviços
  ], 
  services_servicesPrices:[
    "String",// nomes dos serviços
  ], 
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Transaction', transanctionSchema)