const express = require('express')
const router = express.Router()
const client = require('../controllers/ClientController');


//  router.post('/addclient',client.addClient)
 router.post('/signup',client.signup)
 router.post('/login',client.login)
 router.get('/getclient', client.getClient)
 router.delete('/deleteclient/:id', client.deleteClient)
 router.put('/updateclient/:id', client.updateClient)


 module.exports = router;
