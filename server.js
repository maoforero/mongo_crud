const express = require('express');
const app = express();

//Config
app.set('port', process.env.PORT || 3000);

//

module.exports = app;