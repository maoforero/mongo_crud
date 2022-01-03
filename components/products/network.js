const express =  require('express');
const router =  express.Router();


router.get('/', (req, res) => {
    res.sendStatus(200).send('Productos');
});

router.post('/', (req, res) => {
    res.sendStatus(201).send('Producto Post')
})


module.exports = router;