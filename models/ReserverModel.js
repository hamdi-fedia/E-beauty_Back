const mongoose = require('mongoose');

const ReserverModel = mongoose.Schema({

      date_reservatrion: { type: Date, required: true },
      id_coiffeur:{type:String},
      id_client:{type:String},
      nom_coiffeur:{type:String},
      nom_client:{type:String},
      heure:{ type: String, required: true },
      speciality:{ type: String, required: true },
      adresse:{ type: String, required: true },
      prix:{type: String, required: true },
      status: {type : String,default: "En attente",enum: ["En attente" , "confirmé"]}

});

module.exports = mongoose.model('reserver', ReserverModel);