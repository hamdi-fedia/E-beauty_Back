const mongoose = require('mongoose');

const CoiffeurModel = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  sexe_coiffeur: { type: String, required: true },
  ville_coiffeur: { type: String, required: true },
  tel_coiffeur: { type: Number, required: true },
  email_coiffeur: { type: String, required: true },
  password_coiffeur: { type: String, required: true },
  photo_Coiffeur: { type: String, required: true },
  speciality:{ type: String, required: true },
});

module.exports = mongoose.model('Coiffeur', CoiffeurModel);