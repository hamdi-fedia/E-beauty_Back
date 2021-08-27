const coiffeurModel = require('../models/CoiffeurModel')


module.exports = {

  //Add coiffeur

  addCoiffeur: async (req, res) => {
    // const { name, email } = req.body
   const nom = req.body.nom
   const prenom = req.body.prenom
   const sexe_coiffeur = req.body.sexe_coiffeur
   const ville_coiffeur = req.body.ville_coiffeur
   const tel_coiffeur = req.body.tel_coiffeur
   const email_coiffeur = req.body.email_coiffeur
   const password_coiffeur = req.body.password_coiffeur
   const photo_Coiffeur = req.body.photo_Coiffeur
   const speciality = req.body.speciality
    try {
      coiffeur = new coiffeurModel({
        nom,
        prenom,
        sexe_coiffeur,
        ville_coiffeur,
        tel_coiffeur,
        email_coiffeur,
        password_coiffeur,
        photo_Coiffeur,
        speciality
      })
      await coiffeur.save() 
      res.json(coiffeur)
    }

    catch (error) {
      console.error(error.message);
    }
  },
  getCoiffeur: async (req, res) => {
    try {
      const coiffeur = await coiffeurModel.find();
      res.json(coiffeur)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  deleteCoiffeur: async (req, res) => {
    try {
      const coiffeur = await coiffeurModel.findByIdAndDelete(req.params.id)
      res.json(coiffeur)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  updateCoiffeur: async (req, res) => {
    try {
      const coiffeur = await (coiffeurModel.findByIdAndUpdate(req.params.id, req.body, {new : true }))
      res.json(coiffeur)
    }
    catch (error) {
      console.error(error.message);
    }
  }


}