const express = require("express"); // Import express
const bodyParser = require('body-parser');
const router = require("./routes");

const PORT = 3000; // Puerto de escucha

let app = express();
app.use(express.json());

//App iniciando desde cualquier ruta
app.use("/", router)

//App bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//App escuchando puerto 3000
app.listen(PORT, (req, res) => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})