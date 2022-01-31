const User = require('../model/Users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserController = {
  register: async function (req, res) {
    return res.render('register')
  },
  save: async function (req, res) {

    const username = req.body.username

    const createdUser = await User.findOne({ username })
    if (createdUser) return res.status(400).send("Usuário existente")

    const user = new User({
      name: req.body.name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password),
    })

    try {
      const savedUser = await user.save()
      res.send(savedUser)
    } catch (error) {
      res.send('erro')
    }

  },
  logar: function (req, res) {
    return res.render('index')
  },
  login: async function (req, res) {

    const username = req.body.username

    const selectedUser = await User.findOne({ username })
    if (!selectedUser) return res.send("Usuário ou senha inexistente")


    const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
    if (!passwordAndUserMatch) return res.send("Usuário ou senha inexistente")

    const token = jwt.sign({ _id: selectedUser.id }, process.env.TOKEN_SECRET, { expiresIn: 86400 })

    res.header("Access-Control", token)
    return res.redirect(`/principal/${selectedUser.username}/${token}`)
  },
  logout: function (req, res) {
    return res.redirect('/')
  },
  main: async function (req, res) {

    const token = req.params.token
    const username = req.params.user
    const selectedUser = await User.findOne({ username })

    if (!token) return res.status(401).send("Acesso Negado - Token")
    if (!selectedUser) return res.status(401).send("Acesso Negado - Usuário desconhecido")

    try {
      const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
      if (userVerified) {
        return res.render('principal', {selectedUser, token})
      }
    } catch (error) {
      console.log(error)
      res.redirect("/")
    }

  },
  resetPass: async function (req, res) {
    const newPass = req.params.newPass

    try{
      const UserModel = await User.find({})

      const user = {
        password: bcrypt.hashSync(newPass)
      }
      
      // const user = {
      //   sigplay_pass: newPass
      // }
  


      UserModel.forEach(async (e) => {
        let doc = await User.updateOne({ _id: e.id }, user);
      })
  
      const Users = await User.find({})
      return res.json(Users)

    }catch(e){
      console.log(e)
    }


  }

}

module.exports = UserController