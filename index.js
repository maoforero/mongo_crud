const express = require("express"); // Import express
const app = express();
const router = require("./routes");

const PORT = 3000; // Puerto de escucha

//App iniciando desde cualquier ruta
app.use('/', (req, res) => {
    res.sendStatus(200);
})

//App escuchando puerto 3000
app.listen(PORT, (req, res) => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})