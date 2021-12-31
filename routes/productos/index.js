const express = require("express");

const router = express.Router();

const appleRouter = require('./apple');
const samsungRouter = require('./samsung');
const xiaomiRouter = require('./xiaomi');

router.get('/', (req, res) => {
    res.json(['Productos'])
});

router.use('/apple', appleRouter);
router.use('/samsung', samsungRouter);
router.use('/xiaomi', xiaomiRouter);


module.exports = router;