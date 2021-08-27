const http = require('http');
const app = require('./App');

// Server connexion

let PORT = 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error when running the server")
    } else {
        console.log(`Server is ruunnig on port ${PORT}`)
    }
})
