'use strict';


var express = require('express');
var router = express.Router();


/* GET student details */
router.get('/', function (req, res, next) {
    res.render('supplier/supplier') // supplier.ejs
    
});

router.get('/add-supplier', function (req, res, next) {
    res.render('supplier/add_supplier') // supplier.ejs
    
});


router.get('/edit-supplier', function (req, res, next) {
    res.render('supplier/edit_supplier') // supplier.ejs
    
});
 
module.exports = router;
