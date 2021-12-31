const express = require("express");
const router = express.Router();
const productsRouter =  require('./productos');

router.use('/productos', productsRouter);

router.use('/', (req, res) => {
    res.send(200);
})


module.exports = router;