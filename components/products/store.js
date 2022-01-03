const list = [];

function addItem (item){
    list.push(item);
}

function getItem(){
    return list;
}

module.exports = {
    add: addItem,
    list: getItem
}
