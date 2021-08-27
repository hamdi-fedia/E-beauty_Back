const mongoose = require('mongoose');

const ClientModel = mongoose.Schema({

  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  sexe_client: { type: String, required: true },
  ville_client: { type: String, required: true },
  tel_client: { type: Number, required: true },
  email_client: { type: String, required: true },
  password_client: { type: String, required: true },
});

module.exports = mongoose.model('client', ClientModel);