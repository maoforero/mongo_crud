const store = require('./store');

function addProducto(name, price, owner, stock){
    return new Promise((resolve, reject) => {
        if(!name || !price || !owner || !stock ){
            return reject('Datos incorrectos');
            console.error('[error controller] campos vacios en producto');
            reject('Datos faltantes');
            return false;
        }

        const fullInput = {
            name: name,
            price: price,
            owner: owner,
            stock: stock,
        };

        //Almacenando el item
        store.add(fullInput);
        resolve(fullInput);
    })
    console.log(fullInput)
}

function getItem(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addProducto,
    getItem
}