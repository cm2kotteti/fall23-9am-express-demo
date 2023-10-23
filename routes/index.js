var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Development Course of Fall\'23' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login successful' });
});

router.get('/login/newUser', function(req, res, next) {
  res.render('index', { title: 'New user fetched' });
});

module.exports = router;
