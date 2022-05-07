const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  admin: {type: Boolean, default: false},
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema)