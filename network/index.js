exports.success = (req, res, message, estado) => {
    res.status(estado || 200).res.send({
        error:'',
        body: message
    });
};

exports.error = (req, res, message, estado, details) => {
    console.error('[response error] ' + details);

    res.status( estado || 500).send({
        error: message,
        body: '',
    });
};