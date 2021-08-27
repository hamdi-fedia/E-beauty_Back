const mongoose = require('mongoose')
const db_connection = () => {



mongoose.connect('mongodb+srv://fedia:mycode2020@cluster0.kzgr2.mongodb.net/E-beauty?retryWrites=true&w=majority',
{ 
      useNewUrlParser:true,
      useUnifiedTopology:true,
      
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));
}
module.exports = db_connection 