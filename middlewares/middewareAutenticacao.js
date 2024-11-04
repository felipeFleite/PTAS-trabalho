// middlewares.js
function autenticacao(req, res, next) {
    const token = req.query.token;

    if (token === 'Segredo') {
        next();
    } else {
        res.status(404).send('Acesso negado');
    }
}

module.exports = autenticacao
