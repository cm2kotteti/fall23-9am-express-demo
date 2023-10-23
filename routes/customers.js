var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('customers', {'secret': 'express demo'})
})

router.get('/add', (req, res) => {
    res.send('New customer added. We gonna see the update on the live deployed web service.')
})

module.exports = router