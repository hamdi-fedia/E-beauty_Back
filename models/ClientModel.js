const mongoose = require('mongoose');

const ClientModel = mongoose.Schema({

  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  sexe_client: { type: String, required: true },
  ville_client: { type: String, required: true },
  tel_client: { type: Number, required: true },
  email_client: { type: String, required: true },
  hash_password: { type: String, required: true },
});


ClientModel.virtual('password_client')
.set(function(password_client){
    this.hash_password = bcrypt.hashSync(password_client, 10);
});

module.exports = mongoose.model('client', ClientModel);