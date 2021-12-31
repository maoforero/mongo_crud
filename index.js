const express = require("express");
const app = express();
const PORT = 3000;

app.use('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(PORT, (req, res) => {
    console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})