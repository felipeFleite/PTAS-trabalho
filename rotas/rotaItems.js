const express = require('express');
const router = express.Router();

const items = [
  { id: 1, nome: 'Batata'},
  { id: 2, nome: 'Pão'},
];

// Rota para obter todos os itens
router.get('/', (req, res) => {
  res.json(items);
});

// Rota para obter um item específico pelo ID
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(i => i.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item não encontrado');
  }
});

// Rota para adicionar um novo item
router.post('/', (req, res) => {
  const newItem = {
    id: items.length + 1,
    nome: req.body.nome,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Rota para atualizar um item pelo ID
router.put('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(i => i.id === itemId);

  if (item) {
    item.nome = req.body.nome || item.nome;
    res.json(item);
  } else {
    res.status(404).send('Item não encontrado');
  }
});

// Rota para deletar um item pelo ID
router.delete('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === itemId);

  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Item não encontrado');
  }
});

module.exports = router;