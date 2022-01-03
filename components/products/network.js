const express =  require('express');
const router =  express.Router();
const response = require('../../response');
const controller = require('./controller');

router.get('/', (req, res) => {
    controller.getItem()
        .then((productList) =>{
            response.success(req, res, productList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
});

router.post('/', (req, res) => {

    controller.addProducto(req.body.name, req.body.price, req.body.owner, req.body.stock)
        .then((fullInput) =>{
            response.success(req, res, fullInput, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion faltante ', 400, 'simulacion de error controller producto');
        })
})


module.exports = router;