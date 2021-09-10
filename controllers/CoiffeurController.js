const coiffeurModel = require('../models/CoiffeurModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {

  // Add coiffeur

  addCoiffeur: async (req, res) => {
   const nom = req.body.nom
   const prenom = req.body.prenom
   const sexe_coiffeur = req.body.sexe_coiffeur
   const ville_coiffeur = req.body.ville_coiffeur
   const tel_coiffeur = req.body.tel_coiffeur
   const email_coiffeur = req.body.email_coiffeur
   const hash_password = req.body.hash_password
   const photo_coiffeur = req.body.photo_coiffeur
   const speciality = req.body.speciality
    try {
      coiffeur = new coiffeurModel({
        nom,
        prenom,
        sexe_coiffeur,
        ville_coiffeur,
        tel_coiffeur,
        email_coiffeur,
        hash_password,
        photo_coiffeur,
        speciality
      })
      await coiffeur.save() 
      res.json(coiffeur)
    }

    catch (error) {
      console.error(error.message);
    }
  },

  

//   signup:(req,res)=>{
//     coiffeurModel.findOne({email_coiffeur:req.body.email_coiffeur})
//     .exec( async (error,coiffeur)=>{
//         if(coiffeur) return  res.status(400).json({
//             message:'Email already has used'
//         });
    
//         const {nom,prenom,sexe_coiffeur,
//                ville_coiffeur,tel_coiffeur,
//                email_coiffeur, photo_coiffeur,
//                password_coiffeur,speciality} = req.body
//         const hash_password = await bcrypt.hash(password_coiffeur, 10)

//        const  _coiffeur = new coiffeurModel({
//             nom,
//             prenom,
//             sexe_coiffeur,
//             ville_coiffeur,
//             tel_coiffeur,
//             email_coiffeur,
//             hash_password,
//             photo_coiffeur,
//             speciality
//         })

//         _coiffeur.save((error,data) =>{
//             if(error){
//                 return res.status(400).json({
//                     message:'Somthing went wrong!'
//                 })
//             }
//             if(data){
//                 return res.status(201).json({
//                     message:'User created Successfuly..!'  ,
//                     data })

//             }
//         })
//     });

// },

  
signup:(req,res)=>{
    coiffeurModel.findOne({email_coiffeur:req.body.email_coiffeur})
    .exec( async (error,coiffeur)=>{
        if(coiffeur) return  res.status(400).json({
            message:'Email already has used'
        });
    
        const {nom,prenom,sexe_coiffeur,
               ville_coiffeur,tel_coiffeur,
               email_coiffeur, photo_coiffeur,
               password_coiffeur,speciality} = req.body
        const hash_password = await bcrypt.hash(password_coiffeur, 10)

       const  _coiffeur = new coiffeurModel({ 
            nom,
            prenom,
            sexe_coiffeur,
            ville_coiffeur,
            tel_coiffeur,
            email_coiffeur,
            hash_password,
            photo_coiffeur,
            speciality
        })

        _coiffeur.save((error,data) =>{
            if(error){
                return res.status(400).json({
                    message:'Somthing went wrong!'
                })
            }
            if(data){
                return res.status(201).json({
                    message:'User created Successfuly..!'  ,
                    data })

            }
        })
    });

},





   login:async(req,res)=>{
    coiffeurModel.findOne({email_coiffeur:req.body.email_coiffeur})
    .exec((error,coiffeur)=>{
        if(error){
            return res.status(400).json({error}) }
            if(coiffeur){
            const comp= bcrypt.compare(coiffeur.password_coiffeur === req.body.password )
            if(comp)
            {
                    const token = jwt.sign({_id:coiffeur._id},'MEARNSECRET',{expiresIn:'1h'})
                    const {_id, nom,prenom,sexe_coiffeur,
                      ville_coiffeur,tel_coiffeur,
                      email_coiffeur, photo_coiffeur,speciality} = coiffeur

                    res.status(200).json({

                        token,
                        coiffeur:{
                            _id ,
                            nom,
                            prenom,
                            sexe_coiffeur,
                            ville_coiffeur,
                            tel_coiffeur,
                            email_coiffeur,
                            photo_coiffeur,
                            speciality
                        }

                    })
                }else{
                    return res.status(400).json({
                        message:'Invalid Password'
                    })
                }

            }else{
                return res.status(400).json({message:'SomeThing went wrong !'})
            }

    })
} ,

currentUsers:async (req, res) => {
  try {
    const user = await coiffeurModel.findOne({ _id: req.user._id }).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
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
