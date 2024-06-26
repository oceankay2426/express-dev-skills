const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */

router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:tuna', skillsCtrl.delete);


module.exports = router;

