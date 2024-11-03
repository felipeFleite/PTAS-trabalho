const express = require('express');
const app = express();
const PORT = 3000;

const initRouter = require('./rotas/rotaInit')
const itemsRouter = require('./rotas/rotaItems');

app.use('/', initRouter);
app.use('/items', itemsRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });