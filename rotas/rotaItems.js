const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const autenticacao = require('../middlewares/middewareAutenticacao');

router.get('/', autenticacao, itemsController.todosItems);
router.get('/:id', autenticacao, itemsController.itemId);
module.exports = router;
