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



app.use(cors())
app.use('/app/client',ClientRouter)
app.use('/app/coiffeur',CoiffeurRouter)
app.use('/app/admin',AdminRouter)


module.exports = app;

