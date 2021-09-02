const express = require('express')
const router = express.Router()
const reserver = require('../controllers/ReserverController');


 router.post('/addreserver',reserver.addReserver)
 router.get('/getreserver', reserver.getReserver)
 router.delete('/deletereserver/:id', reserver.deleteReserver)
 router.put('/updatereserver/:id', reserver.updateReserver)


 module.exports = router;