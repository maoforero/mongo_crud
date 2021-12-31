const express = require("express");

const router = express.Router();


const appleRouter = require('./apple');
const samsungRouter = require('./samsung');
const xiaomiRouter = require('./xiaomi');

router.get('/', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
});

router.post('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Post productos ' + req.body.text + ' nuevo');
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