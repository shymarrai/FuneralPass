const mongoose = require('mongoose')

const transanctionSchema = new mongoose.Schema({
  declarant_id: {type: String, required: true},
  services_id:{type: String, required: true},
  obit_id:{type: String, required: true},

  seller_name:{type: String, default: "N/A"}, // nome do vendedor
  seller_date:{type: Date, default: Date.now},

  user_name: {type: String, default: "N/A"},
  user_username: {type: String, default: "N/A"}, // info da conta usada para a venda

  services_advice:{type: String, default: "N/A"}, //valor da venda
  services_comissionValue:{type: String, default: "N/A"}, //valor da comissão
  services_taxes:{type: String, default:"8"}, //impostos
  services_taxes_adverses:{type: String, default: "N/A"}, //taxas diversas
  services_costs:{type: String, default: "N/A"}, //Custo dos Serviços
  services_profit:{type: String, default: "N/A"}, //lucro liquido
  
  declarant_name:{type: String, default: "N/A"},
  obit_name:{type: String, default: "N/A"},
  services_servicesNames:[
    "String",// nomes dos serviços
  ], 
  services_servicesPrices:[
    "String",// nomes dos serviços
  ], 
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Transaction', transanctionSchema)