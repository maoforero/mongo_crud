const express =  require('express');
const router =  express.Router();
const response = require('../../')
const controller = require('./controller');

router.get('/', (req, res) => {
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {

    controller.addProducto(req.body.name, req.body.price, req.body.owner, req.body.stock)
        then(() =>{

        })
        .catch(e => {

        })
})


module.exports = router;