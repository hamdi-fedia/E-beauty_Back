const express = require('express')
const router = express.Router()
const coiffeur = require('../controllers/CoiffeurController');


 router.post('/addcoiffeur',coiffeur.addCoiffeur)
 router.get('/getcoiffeur', coiffeur.getCoiffeur)
 router.delete('/deletecoiffeur/:id', coiffeur.deleteCoiffeur)
 router.put('/updatecoiffeur/:id', coiffeur.updateCoiffeur)


 module.exports = router;