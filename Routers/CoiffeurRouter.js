const express = require('express')
const router = express.Router()
const coiffeur = require('../controllers/CoiffeurController');
const authentification = require('../middleware/auth')

 router.post('/addcoiffeur',coiffeur.addCoiffeur)
 router.post('/signup',coiffeur.signup)
 router.get('/current',authentification,coiffeur.currentUsers)
 router.post('/login',coiffeur.login)
 router.get('/getcoiffeur', coiffeur.getCoiffeur)
 router.delete('/deletecoiffeur/:id', coiffeur.deleteCoiffeur)
 router.put('/updatecoiffeur/:id', coiffeur.updateCoiffeur)

 
 module.exports = router;