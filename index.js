const express = require("express"); // Import express
const app = express();
const router = require("./routes");

const PORT = 3000; // Puerto de escucha

app.use(express.json());
//App iniciando desde cualquier ruta
app.use("/", router)

//App escuchando puerto 3000
app.listen(PORT, (req, res) => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})