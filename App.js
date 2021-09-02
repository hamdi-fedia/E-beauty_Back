const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const db = require('./config/db')
db();

const app = express();


app.use(express.json())
const ClientRouter = require('./Routers/ClientRouter')
const CoiffeurRouter = require('./Routers/CoiffeurRouter')
const AdminRouter = require('./Routers/AdminRouter')
const ReserverRouter = require('./Routers/ReserverRouter')




app.use(cors())
app.use('/e-beauty/client',ClientRouter)
app.use('/e-beauty/coiffeur',CoiffeurRouter)
app.use('/e-beauty/admin',AdminRouter)
app.use('/e-beauty/reserver',ReserverRouter)


module.exports = app;

