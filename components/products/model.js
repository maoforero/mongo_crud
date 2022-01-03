const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
    name: String,
    price: {
        type: BigInt,
        required: true
    },
    owner: String,
    stock: {
        type: BigInt,
        required: true
    },
});

const model = mongoose.model('Productos', mySchema);
module.exports = model;