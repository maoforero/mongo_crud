const express = require("express"); // Import express
const bodyParser = require('body-parser');
const router = require("./components/products/routes/routes");
const app = require('./server');
const PORT = app.get('port')

app.use(express.json());

//static files
app.use('/', express.static('public'));

//App iniciando desde cualquier ruta
router(app);

//App bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//App escuchando puerto 3000
app.listen(app.get('port'), (req, res) => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`)
});