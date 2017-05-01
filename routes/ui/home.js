'use strict';


var express = require('express');
var router = express.Router();


/* GET student details */
router.get('/', function (req, res, next) {
    res.render('index') // student.ejs

});

router.get('/dashboard', function (req, res, next) {
    res.render('dashboard') // student.ejs

});

module.exports = router;
