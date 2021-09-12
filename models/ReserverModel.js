const mongoose = require('mongoose');

const ReserverModel = mongoose.Schema({

      date_reservatrion: { type: Date },
      id_coiffeur:{type:String},
      id_client:{type:String},
      nom_coiffeur:{type:String},
      nom_client:{type:String},
      heure:{ type: String},
      speciality:{ type: String},
      adresse:{ type: String},
      prix:{type: String},
      status: {type : String,default:"En attente",enum: ["En attente" , "confirmé"]}

});

module.exports = mongoose.model('reserver', ReserverModel);