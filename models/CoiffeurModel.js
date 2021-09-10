const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')


const CoiffeurModel = new mongoose.Schema({
  nom: { type: String  },
  prenom: { type: String  },
  sexe_coiffeur: { type: String },
  ville_coiffeur: { type: String },
  tel_coiffeur: { type: String  },
  email_coiffeur: { type: String ,unique:true},
  hash_password: { type: String },
  photo_coiffeur: { type: String },
  speciality:{ type: String  },
});

CoiffeurModel.virtual('password_coiffeur')
.set(function(password_coiffeur){
    this.hash_password = bcrypt.hashSync(password_coiffeur, 10);
});

module.exports = coiffeur =  mongoose.model('coiffeur', CoiffeurModel);