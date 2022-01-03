const express = require("express");
const router = express.Router();
const productsRouter =  require('./productos');

router.use('/productos', productsRouter);

const routes = function (server){
    server.use('/productos', productos)
}



module.exports = router;
