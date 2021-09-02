const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const AdminModel = mongoose.Schema({

  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email_admin: { type: String, required: true , unique:true},
  password_admin: { type: String, required: true },
});

AdminModel.plugin(uniqueValidator)

module.exports = mongoose.model('admin', AdminModel);