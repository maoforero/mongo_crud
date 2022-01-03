const db = require('mongoose');

//mongodb+srv://db_user_proyect:<proyect2000>@cluster0.hdfn6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
db.Promise = global.Promise;
db.connect('mongodb+srv://db_user_proyect:<proyect2000>@cluster0.hdfn6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
    dbName: 'mercadogratis'

})

console.log('[db] conectada')

function addItem (item){
    list.push(item);
}

function getItem(){
    return list;
}

module.exports = {
    add: addItem,
    list: getItem,

}
