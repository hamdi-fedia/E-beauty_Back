const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')


const CoiffeurModel = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  sexe_coiffeur: { type: String, required: true },
  ville_coiffeur: { type: String, required: true },
  tel_coiffeur: { type: Number, required: true },
  email_coiffeur: { type: String, required: true ,unique:true},
  hash_password: { type: String, required: true },
  photo_coiffeur: { type: String, required: true },
  speciality:{ type: String, required: true },
});

CoiffeurModel.virtual('password_coiffeur')
.set(function(password_coiffeur){
    this.hash_password = bcrypt.hashSync(password_coiffeur, 10);
});

module.exports = coiffeur =  mongoose.model('coiffeur', CoiffeurModel);