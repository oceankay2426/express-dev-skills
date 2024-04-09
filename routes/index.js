const express = require('skills');
const { get } = require('./skill');
const router = skill.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Skills' });
});

module.exports = router;
//go