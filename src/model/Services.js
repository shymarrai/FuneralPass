const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
  services_advice:{type: String, default: "N/A"}, //assessoria
  services_rates:{type: String, default: "N/A"}, //taxas
  services_dateSell:{type: Date, default: Date.now}, //data da venda
  services_comission:{type: String, default: "N/A"}, //comissão
  services_comissionedName:{type: String, default: "N/A"}, // quem recebeu
  services_comissionValue:{type: String, default: "N/A" }, // valor da comissaõ
  services_paymodeSell:{type: String, default: "N/A" }, //forma de pagamento
  services_descriptionModePaymentSell:{type: String, default: "N/A"}, // descrição da forma de pagamento
  services_servicesNames:[
    "String",// nomes dos serviços
  ], 
  services_servicesPrices:[
    "String",// nomes dos serviços
  ], 
  
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Services', servicesSchema)