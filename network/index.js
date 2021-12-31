exports.success = (req, res, message) => {
    res.send({
        error:'',
        body: message
    });
};

exports.error = (req, res, error) => {
    res.send({
        error:error,
        body: ''
    });
}