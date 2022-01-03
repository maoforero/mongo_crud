
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

        console.log(fullInput);
        resolve(fullInput);
    })
    console.log(fullInput)
}



module.exports = {
    addProducto
}