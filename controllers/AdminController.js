const adminModel = require('../models/AdminModel')


module.exports = {

  //Add admin

  addAdmin: async (req, res) => {
    // const { name, email } = req.body
   const nom = req.body.nom
   const prenom = req.body.prenom
   const email_admin = req.body.email_admin
   const password_admin = req.body.password_admin
    try {
      admin = new adminModel({
        nom,
        prenom,
        email_admin,
        password_admin
      })
      await admin.save() 
      res.json(admin)
    }

    catch (error) {
      console.error(error.message);
    }
  },
  getAdmin: async (req, res) => {
    try {
      const admin = await adminModel.find();
      res.json(admin)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  deleteAdmin: async (req, res) => {
    try {
      const admin = await adminModel.findByIdAndDelete(req.params.id)
      res.json(admin)
    }
    catch (error) {
      console.error(error.message);
    }
  },
  updateAdmin: async (req, res) => {
    try {
      const admin = await (adminModel.findByIdAndUpdate(req.params.id, req.body, {new : true }))
      res.json(admin)
    }
    catch (error) {
      console.error(error.message);
    }
  }


}