const express = require("express");
const productos =  require('../components/products/network')

const routes = function (server){
    server.use('/productos', productos);
}

module.exports = routes;