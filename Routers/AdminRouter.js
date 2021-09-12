const express = require('express')
const router = express.Router()
const admin = require('../controllers/AdminController');


        router.post('/addadmin',admin.addAdmin)
        router.post('/login',admin.login)


 module.exports = router;
