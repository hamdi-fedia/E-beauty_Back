const adminModel = require('../models/AdminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

  //login admin
login : (req, res) => {
  adminModel.findOne({email_admin:req.body.email_admin}).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword =  bcrypt.compare(req.body.password_admin,user.password_admin );
      if (isPassword ) {
        const token =  jwt.sign({
          _id:user._id,
          nom:user.nom,
          prenom:user.prenom,
          email_admin:user.email_admin
         },'MEARNSECRET',{expiresIn:'1h'})
          res.status(200).json({
          token 
        });
      } else {
        return res.status(400).json({
          message: "Invalid password !",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
},









currentUsers:async (req, res) => {
  try {
    const user = await adminModel.findOne(req.params.id) ;
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
},




  

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


 
}