const ClientModel = require('../models/ClientModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

  //Add client

  // addClient: async (req, res) => {
  //   // const { name, email } = req.body
  //  const nom = req.body.nom
  //  const prenom = req.body.prenom
  //  const sexe_client = req.body.sexe_client
  //  const ville_client = req.body.ville_client
  //  const tel_client = req.body.tel_client
  //  const email_client = req.body.email_client
  //  const password_client = req.body.password_client
  //   try {
  //     client = new ClientModel({
  //       nom,
  //       prenom,
  //       sexe_client,
  //       ville_client,
  //       tel_client,
  //       email_client,
  //       password_client
  //     })
  //     await client.save() 
  //     res.json(client)
  //   }

  //   catch (error) {
  //     console.error(error.message);
  //   }
  // },

  
  signup:(req,res)=>{
    ClientModel.findOne({email_client:req.body.email_client})
    .exec( async (error,client)=>{
        if(client) return  res.status(400).json({
            message:'Email already has used'
        });
    
        const {nom,prenom,sexe_client,
               ville_client,tel_client,
               email_client,password_client} = req.body
        const hash_password = await bcrypt.hash(password_client, 10)

       const  _client = new ClientModel({
            nom,
            prenom,
            sexe_client,
            ville_client,
            tel_client,
            email_client,
            hash_password
        }) 

        _client.save((error,data) =>{
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
  ClientModel.findOne({email_client:req.body.email_client})
  .exec((error,client)=>{
      if(error){
          return res.status(400).json({error}) }
          if(client){
          const comp= bcrypt.compare(client.password_client === req.body.password )
          if(comp)
          {
                  const token = jwt.sign({_id:client._id},'MEARNSECRET',{expiresIn:'1h'})
                  const {_id, nom,prenom,sexe_client,
                    ville_client,tel_client,
                    email_client} = client

                  res.status(200).json({

                      token,
                      client:{
                          _id ,
                          nom,
                          prenom,
                          sexe_client,
                          ville_client,
                          tel_client,
                          email_client
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