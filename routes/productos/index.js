const express = require("express");

const router = express.Router();

const response = require("../../network");

const appleRouter = require('./apple');
const samsungRouter = require('./samsung');
const xiaomiRouter = require('./xiaomi');

router.get('/', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    response.success(req, res, 'Lista de productos')
});

router.post('/', (req, res) => {
    console.log(req.query);
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error Inesperadoa', 400, 'simulacion de error');
    }else{
        response.success(req, res, 'Agregado correctamente', 201);
    }
    
});

router.delete('/', (req, res) => {
    res.send('delete')
});

router.patch('/', (req, res) => {
    res.send('patch')
});

router.use('/apple', appleRouter);
router.use('/samsung', samsungRouter);
router.use('/xiaomi', xiaomiRouter);


module.exports = router;