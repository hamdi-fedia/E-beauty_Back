const express = require('express')
const router = express.Router()
const admin = require('../controllers/AdminController');


 router.post('/addadmin',admin.addAdmin)
 router.get('/getadmin', admin.getAdmin)
 router.delete('/deleteadmin/:id', admin.deleteAdmin)
 router.put('/updateadmin/:id', admin.updateAdmin)
 router.post('/signin',admin.signin)
 router.post('/signup',admin.signup)

 module.exports = router;
