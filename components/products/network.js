const express =  require('express');
const router =  express.Router();


router.get('/', (req, res) => {
    res.send('Productos');
});

router.post('/', (req, res) => {
    res.send('Producto Post')
})

module.exports = router;