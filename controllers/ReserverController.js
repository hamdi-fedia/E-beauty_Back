const reserverModel = require('../models/ReserverModel')


module.exports = {

  //Add reserver

  addReserver: async (req, res) => {
    // const { name, email } = req.body
   const date_reservatrion = req.body.date_reservatrion
   const prix = req.body.prix
    try {
      reserver = new reserverModel({
        date_reservatrion,
        prix
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