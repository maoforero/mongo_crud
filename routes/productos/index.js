const express = require("express");

const router = express.Router();

const appleRouter = require('./apple');
const samsungRouter = require('./samsung');
const xiaomiRouter = require('./xiaomi');


router.post('/', (req, res) => {
    res.send('Post productos')
});

router.delete('/', (req, res) => {
    res.send('delete')
});

router.patch('/', (req, res) => {
    res.send('patch')
});

router.get('/', (req, res) => {
    res.json(['Productos'])
});

router.use('/apple', appleRouter);
router.use('/samsung', samsungRouter);
router.use('/xiaomi', xiaomiRouter);


module.exports = router;