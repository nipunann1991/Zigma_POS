'use strict';

var express = require('express');
var router = express.Router();
var supplierController = require('../../controllers/supplierController');

router.post('/add_supplier', function(req, res) {
	/*optional stuff to do after success */ 

	var sup_id = req.body.sup_id;
    var sup_name = req.body.sup_name;
    var dealer = req.body.dealer;
    var nic = req.body.nic;
    var sup_address = req.body.sup_address;
    var tel = req.body.tel;
    var fax = req.body.fax;
    var email = req.body.email;

	var data = "'"+sup_id+"', '"+sup_name+"', '"+dealer+"', '"+nic+"', '"+sup_address+"', '"+tel+"', '"+fax+"', '"+email+"' ";

	supplierController.addSupplier(req, res, data);
	console.log("addSupplier");
});


router.post('/get_suppliers', function(req, res) { 
	supplierController.getSuppliers(req, res);
	console.log("get_suppliers");
});



router.post('/get_suppliers_last_index', function(req, res) {
	/*optional stuff to do after success */
	var data = req.body;  
	supplierController.getSuppliersLastIndex(req, res, data);
	console.log("get_suppliers_last_index");
});



router.post('/search_supplier', function(req, res) {
	/*optional stuff to do after success */
	var data = req.body;  
	console.log(data);
	supplierController.searchSupplier(req, res, data);
	
});

router.post('/update_supplier', function(req, res) {
	/*optional stuff to do after success */ 
	var data = req.body
	 
	supplierController.updateSupplier(req, res, data);
	console.log(data);
});



module.exports = router;
