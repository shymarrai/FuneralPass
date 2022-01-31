const User = require('../model/Users')
const jwt = require('jsonwebtoken')
const Transaction = require('../model/Transactions')
const fs = require('fs')
const pdf = require('html-pdf')


var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

const AdminController = {
  dash: async function (req, res) {
    const token = req.params.token
    const username = req.params.user
    const result = ''
    const selectedUser = await User.findOne({ username })

    if (!token) return res.status(401).send("Acesso Negado")
    if (!selectedUser) return res.status(401).send("Acesso Negado")
    if (!selectedUser.admin) return res.status(401).send("Acesso Negado")

    const listSellers = await Transaction.find().distinct('seller_name')
    try {
      const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
      if (userVerified) {
        return res.render('relatorio', { selectedUser, token, result, listSellers })
      }
    } catch (e) {
      return res.redirect('/')
    }


  },
  generate: async function (req, res) {
    const token = req.params.token
    const username = req.params.user
    const de = req.body.de
    const ate = req.body.ate

    // const user_username = req.body.user_username
    const seller_name = req.body.seller_name


    const selectedUser = await User.findOne({ username })
    const listSellers = await Transaction.find().distinct('seller_name')

    if (!token) return res.status(401).send("Acesso Negado")
    if (!selectedUser) return res.status(401).send("Acesso Negado")
    if (!selectedUser.admin) return res.status(401).send("Acesso Negado")
    if (!de) return res.redirect(`/relatorio/${selectedUser.username}/${token}`)
    if (!ate) return res.redirect(`/relatorio/${selectedUser.username}/${token}`)

    try {
      // const filtroUsername = (user_username !== 'todos') ? { "user_username": user_username } : {}
      const filtroSellername = (seller_name !== 'todos') ? { "seller_name": seller_name} : {}

      const result = await Transaction.find({ "$and": [{ "created_at": { "$gte": de, "$lte": ate } }, filtroSellername] }).sort({ "_id": -1 })

      if (result.length <= 0) return res.send(`Resultado Vazio <a href='/relatorio/${selectedUser.username}/${token}'>Voltar</a>`)

      res.render("relatorio", { selectedUser, token, result, listSellers })
    } catch (e) {
      console.log(e)
      return res.redirect(`/relatorio/${selectedUser.username}/${token}`)
    }
  },
  generatePdf: async function (req, res) {

    const id = req.params.id

    const result = await Transaction.findOne({ _id: id})

    const html = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Roboto:wght@100;400&display=swap');
        
        p{
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 100;
          color: #000
        }
        strong, h2{
          font-family: "Roboto", sans-serif;
        }
        img{
          width: 100px;
          position: absolute;
          right: 60px;
          top: -2px;
        }
        div#wrapperColor{
          width: 100%;
          background-color: #EEE;
          margin-bottom: -10px;
          margin-top: -10px;
        }
        div#wrapper{
          width: 100%;
          background-color: #FFF;
        }
        #values{
          border: 1px solid #EEE;
          border-radius: 4px;
          width: 100%;
        }
      </style>

      <div id="pageHeader-first">
        <img src='https://i.ibb.co/qg2zJ9t/logoDark.png'/>
      </div>

      <div id='wrapperColor'>
        <p style='padding: 8px'>
          <strong>
            Data:
          </strong>
          ${result.created_at.toLocaleString('pt-BR')}
        </p>
      </div>

      <div id='wrapper'>
        <p style='padding: 8px'>
          <strong>
            Nome do Vendedor:
          </strong>
          ${result.seller_name}
        </p>
      </div>

      <div id='wrapperColor'>
        <p style='padding: 8px'>
          <strong>
            Nome do Declarante:
          </strong>
          ${result.declarant_name}
        </p>
      </div>

      <div id='wrapper'>
        <p style='padding: 8px'>
          <strong>
            Nome do Óbito:
          </strong>
          ${result.obit_name}
        </p>
      </div>

      <div id='wrapperColor'>
        <p style='padding: 8px'>
          <strong>
            Nome do usuário:
          </strong>
          ${result.user_name}
        </p>
      </div>

      <div id='wrapper'>
        <p style='padding: 8px'>
          <strong>
            Login:
          </strong>
          ${result.user_username}
        </p>
      </div>

      <hr />

      <h2 style='margin-top: 70px;'>
        Dados da venda
      </h2>

      <div id='values'>

        <div id='wrapperColor'>
          <p style='padding: 8px'>
            <strong>
              Assessoria:
            </strong>
            R$ ${result.services_advice}
          </p>
        </div>

        <div id='wrapper'>
          <p style='padding: 8px'>
            <strong>
              Taxas (8%):
            </strong>
            ${result.services_taxes}
          </p>
        </div>

        <div id='wrapperColor'>
          <p style='padding: 8px'>
            <strong>
              Taxas Adversas:
            </strong>
            ${result.services_taxes_adverses}
          </p>
        </div>

        <div id='wrapper'>
          <p style='padding: 8px'>
            <strong>
              Custo dos serviços:
            </strong>
            ${result.services_costs}
          </p>
        </div>

        <div id='wrapperColor'>
          <p style='padding: 8px'>
            <strong>
              Lucro Liquido:
            </strong>
            ${result.services_profit}
          </p>
        </div>

          <h2 style='margin-top: 70px;'>
            Serviços
          </h2>
          <div>

            ${
              result.services_servicesNames.map((service, index) => {
                return `

                Serviço: ${service}  → ${result.services_servicesPrices[index]}
                  <hr/>
                `
              })
            }


          </div>

      </div>
    
    `
        
    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }

    pdf.create(html, options).toBuffer((err, buffer) => {
        if(err) return res.status(500).json(err)
        
        res.end(buffer)               
    })
  }
}

module.exports = AdminController
