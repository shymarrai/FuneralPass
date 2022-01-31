const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength:3, maxlength:20},
  username: {type: String, required: true, minlength:3, maxlength:20, unique: true},
  password: {type: String, required: true, minlength:6},
  admin: {type: Boolean, default: false},
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema)