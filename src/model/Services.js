const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
  services_advice:{type: String, required: true}, //assessoria
  services_rates:{type: String}, //taxas
  services_dateSell:{type: Date, }, //data da venda
  services_comission:{type: String}, //comissão
  services_comissionedName:{type: String}, // quem recebeu
  services_comissionValue:{type: String, }, // valor da comissaõ
  services_paymodeSell:{type: String, }, //forma de pagamento
  services_descriptionModePaymentSell:{type: String}, // descrição da forma de pagamento
  services_servicesNames:[
    "String",// nomes dos serviços
  ], 
  services_servicesPrices:[
    "String",// nomes dos serviços
  ], 
  
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Services', servicesSchema)