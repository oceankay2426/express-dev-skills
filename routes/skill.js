const express = require('express');
const router = express.Router();
const expresssCtrl = require('../controllers/expresss');

/* GET users listing. */
// GET /todos (index functionality/action -> list all todos)

router.get('/', expresssCtrl.index );

//get single express
router.get('/:id', expresssCtrl.show);
module.exports = router;

