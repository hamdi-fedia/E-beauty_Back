const adminModel = require('../models/AdminModel')


module.exports = {

  //login admin
    



login : (req, res) => {
  coiffeurModel.findOne({email_admin:req.body.email_admin}).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword =  bcrypt.compare(req.body.password_coiffeur,user.password_coiffeur );
      if (isPassword ) {
        const token =  jwt.sign({
          _id:user._id,
          nom:user.nom,
          prenom:user.prenom,
          sexe_coiffeur:user.sexe_coiffeur,
          ville_coiffeur:user.ville_coiffeur,
          tel_coiffeur:user.tel_coiffeur,
          email_coiffeur:user.email_coiffeur,
          photo_coiffeur:user.photo_coiffeur,
          speciality:user.speciality
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
    const user = await coiffeurModel.findOne(req.params.id) ;
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
},




  

  // addAdmin: async (req, res) => {
  //   // const { name, email } = req.body
  //  const nom = req.body.nom
  //  const prenom = req.body.prenom
  //  const email_admin = req.body.email_admin
  //  const password_admin = req.body.password_admin
  //   try {
  //     admin = new adminModel({
  //       nom,
  //       prenom,
  //       email_admin,
  //       password_admin
  //     })
  //     await admin.save() 
  //     res.json(admin)
  //   }

  //   catch (error) {
  //     console.error(error.message);
  //   }
  // },


  // getAdmin: async (req, res) => {
  //   try {
  //     const admin = await adminModel.find();
  //     res.json(admin)
  //   }
  //   catch (error) {
  //     console.error(error.message);
  //   }
  // },
  // deleteAdmin: async (req, res) => {
  //   try {
  //     const admin = await adminModel.findByIdAndDelete(req.params.id)
  //     res.json(admin)
  //   }
  //   catch (error) {
  //     console.error(error.message);
  //   }
  // },
  // updateAdmin: async (req, res) => {
  //   try {
  //     const admin = await (adminModel.findByIdAndUpdate(req.params.id, req.body, {new : true }))
  //     res.json(admin)
  //   }
  //   catch (error) {
  //     console.error(error.message);
  //   }
  // }
  

}