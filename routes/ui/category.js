'use strict';


var express = require('express');
var router = express.Router();


/* GET student details */
router.get('/', function (req, res, next) {
    res.render('category/category') // student.ejs
    
});

 
module.exports = router;
