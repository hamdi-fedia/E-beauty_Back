const mongoose = require('mongoose');

const ReserverModel = mongoose.Schema({

  date_reservatrion: { type: Date, required: true },
  prix: { type: Number, required: true },
});

module.exports = mongoose.model('reserver', ReserverModel);