exports.success = function (req, res, item, estatus){
    res.status(estatus || 200).send({
        error:'',
        body: item
    });
}

exports.error = function (req, res, item, estatus, details){
    console.error('[response error] ' + details);

    res.status(estatus || 500).send({
        error:'item',
        body:''
    });
}
