var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>Hello World</h1>');
});

router.get('/delete', function(req, res, next) {
  res.json({"status": "User deleted"})
});

router.get('/delete/id', function(req, res, next) {
  res.send('User deleted with an id')
});

module.exports = router;
