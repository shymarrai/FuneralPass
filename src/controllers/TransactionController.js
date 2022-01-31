const User = require('../model/Users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const xl = require('excel4node')
const Declarant = require('../model/Declarant')
const Obit = require('../model/Obits')
const Service = require('../model/Services')
const Transaction = require('../model/Transactions')


const TransactionController = {
  saveTransaction: async function (req, res) {

    const token = req.params.token
    const username = req.params.user

    const selectedUser = await User.findOne({ username })

    if (!token) return res.status(401).send("Acesso Negado - Token")
    if (!selectedUser) return res.status(401).send("Acesso Negado - Usuário desconhecido")


    // DADOS DO DACLARANTE
    const declarant_name = req.body.declarant_name
    const declarant_cpf = req.body.declarant_cpf
    const declarant_cel = req.body.declarant_cel
    const declarant_email = req.body.declarant_email
    const declarant_parentLevel = req.body.declarant_parentLevel
    const declarant_rg = req.body.declarant_rg
    const declarant_nameMother = req.body.declarant_nameMother
    const declarant_cep = req.body.declarant_cep
    const declarant_city = req.body.declarant_city
    const declarant_state = req.body.declarant_state
    const declarant_address = req.body.declarant_address
    const declarant_complement = req.body.declarant_complement
    const declarant_number = req.body.declarant_number
   
    const declarant = new Declarant({
      declarant_name: declarant_name[0],
      declarant_cpf: declarant_cpf[0],
      declarant_cel,
      declarant_email,
      declarant_parentLevel,
      declarant_rg,
      declarant_nameMother,
      declarant_cep,
      declarant_city,
      declarant_state,
      declarant_address,
      declarant_complement,
      declarant_number,

    })
    

    // DADOS DO ÓBITO
    const obit_name = req.body.obit_name
    const obit_cpf = req.body.obit_cpf
    const obit_dateBirth = req.body.obit_dateBirth
    const obit_dateDeath = req.body.obit_dateDeath
    const obit_rg = req.body.obit_rg
    const obit_color = req.body.obit_color
    const obit_sex = req.body.obit_sex
    const obit_stepMark = req.body.obit_stepMark
    const obit_civilState = req.body.obit_civilState
    const obit_typeDeath = req.body.obit_typeDeath
    const obit_nameMother = req.body.obit_nameMother
    const obit_nameFather = req.body.obit_nameFather
    const obit_local = req.body.obit_local
    const obit_finalization = req.body.obit_finalization

    const obit = new Obit({
      obit_name,
      obit_cpf,
      obit_dateBirth,
      obit_dateDeath,
      obit_rg,
      obit_color,
      obit_sex,
      obit_stepMark,
      obit_civilState,
      obit_typeDeath,
      obit_nameMother,
      obit_nameFather,
      obit_local,
      obit_finalization,

    })


    // DADOS DO SERVIÇO
    const services_advice = req.body.services_advice
    const services_rates = req.body.services_rates
    const services_dateSell = req.body.services_dateSell
    const services_comission = req.body.services_comission
    const services_comissionedName = req.body.services_comissionedName
    const services_comissionValue = req.body.services_comissionValue
    const services_paymodeSell = req.body.services_paymodeSell
    const services_descriptionModePaymentSell = req.body.services_descriptionModePaymentSell
    const service_name = req.body.service_name_info
    const service_price = req.body.service_price_info

    const service = new Service({
      services_advice,
      services_rates,
      services_dateSell,
      services_comission,
      services_comissionedName,
      services_comissionValue,
      services_paymodeSell,
      services_descriptionModePaymentSell,
      services_servicesNames: service_name,
      services_servicesPrices: service_price,

    })


    // DADOS DA TRANSAÇÂO
    const input_taxes = req.body.input_taxes
    const input_taxes_adverses = req.body.input_taxes_adverses
    const input_custe_of_services = req.body.input_custe_of_services
    const input_profit = req.body.input_profit
    const seller_name = req.body.seller_name





    try {
      const savedDeclarant = await declarant.save()
      const savedService = await service.save()
      const savedObit = await obit.save()

      const transaction = new Transaction({
        declarant_id: savedDeclarant._id,
        services_id: savedService._id,
        obit_id:savedObit._id,
        seller_name,
        user_name: selectedUser.name,
        user_username: selectedUser.username,
        services_advice,
        services_taxes: input_taxes,
        services_taxes_adverses: input_taxes_adverses,
        services_costs: input_custe_of_services,
        services_profit: input_profit,
        declarant_name: declarant_name[0],
        obit_name: req.body.obit_name,
        services_servicesNames: service_name,
        services_servicesPrices: service_price,
      })

      const savedTransaction = await transaction.save()

      const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
      if (userVerified) {
        return res.render('principal', {selectedUser, token})
      }
    } catch (error) {
      console.log(error)
      res.redirect("/")
    }

  }
}

module.exports = TransactionController