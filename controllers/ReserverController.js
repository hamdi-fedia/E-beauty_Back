const reserverModel = require('../models/ReserverModel')


module.exports = {

  //Add reserver

  addReserver: async (req, res) => {
  
   const date_reservatrion = req.body.date_reservatrion
   const id_coiffeur = req.body.id_coiffeur
   const id_client=req.body.id_client
   const nom_coiffeur=req.body.nom_coiffeur
   const nom_client=req.body.nom_client
   const heure = req.body.heure
   const speciality= req.body.speciality
   const adresse=req.body.adresse
   const prix = req.body.prix
   const status=req.body.status
    try {
      reserver = new reserverModel({
        date_reservatrion,
        id_coiffeur,
        id_client,
        nom_coiffeur,
        nom_client,
        heure,
        speciality,
        adresse,
        prix,
        status
   
      })
      await reserver.save() 
      res.json(reserver)
    }

    catch (error) {
      console.error(error.message);
    }
  },
  getReserver: async (req, res) => {
    try {
      const reserver = await reserverModel.find();
      res.json(reserver)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  deleteReserver: async (req, res) => {
    try {
      const reserver = await reserverModel.findByIdAndDelete(req.params.id)
      res.json(reserver)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  updateReserver: async (req, res) => {
    try {
      const reserver = await (reserverModel.findByIdAndUpdate(req.params.id, req.body, {new : true }))
      res.json(reserver)
    }
    catch (error) {
      console.error(error.message);
    }
  }


}