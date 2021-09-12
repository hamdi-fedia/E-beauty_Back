const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const CoiffeurModel = new mongoose.Schema({
  nom: { type: String  },
  prenom: { type: String  },
  sexe_coiffeur: { type: String },
  ville_coiffeur: { type: String },
  tel_coiffeur: { type: String  },
  email_coiffeur: { type: String ,unique:true},
  password_coiffeur: { type: String },
  photo_coiffeur: { type: String },
  speciality:{ type: String  },
});



module.exports = coiffeur =  mongoose.model('coiffeur', CoiffeurModel);