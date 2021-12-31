const express = require("express");
const router = express.Router();
const productsRouter =  require('./productos');

router.use('/productos', productsRouter);

router.use('/', (req, res) => {
    console.log(req.headers);
    console.log(req.query);
    console.log(req.body);
    res.sendStatus(201);
});


module.exports = router;