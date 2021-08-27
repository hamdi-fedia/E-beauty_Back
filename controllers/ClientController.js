const ClientModel = require('../models/ClientModel')


module.exports = {

  //Add client

  addClient: async (req, res) => {
    // const { name, email } = req.body
   const nom = req.body.nom
   const prenom = req.body.prenom
   const sexe_client = req.body.sexe_client
   const ville_client = req.body.ville_client
   const tel_client = req.body.tel_client
   const email_client = req.body.email_client
   const password_client = req.body.password_client
    try {
      client = new ClientModel({
        nom,
        prenom,
        sexe_client,
        ville_client,
        tel_client,
        email_client,
        password_client
      })
      await client.save() 
      res.json(client)
    }

    catch (error) {
      console.error(error.message);
    }
  },
  getClient: async (req, res) => {
    try {
      const client = await ClientModel.find();
      res.json(client)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  deleteClient: async (req, res) => {
    try {
      const client = await ClientModel.findByIdAndDelete(req.params.id)
      res.json(client)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  updateClient: async (req, res) => {
    try {
      const client = await (ClientModel.findByIdAndUpdate(req.params.id, req.body, {new : true }))
      res.json(client)
    }
    catch (error) {
      console.error(error.message);
    }
  }


}