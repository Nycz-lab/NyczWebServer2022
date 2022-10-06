var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    //res.send("Hello Kek!");
    res.render('index');
});

module.exports = router;