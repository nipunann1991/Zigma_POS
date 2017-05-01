'use strict';

var express = require('express');
var router = express.Router();
var productController = require('../../controllers/productController');


router.post('/get_categories', function(req, res) {
	/*optional stuff to do after success */
	productController.getCategories(req, res);
	console.log("categories");
});

router.post('/add_categories', function(req, res) {
	/*optional stuff to do after success */
	var id = req.body.id;
	var cat_name = req.body.cat_name;
	var cat_desc = req.body.cat_desc;

	var data = "'"+id+"', '"+cat_name+"', '"+cat_desc+"'";

	productController.addCategories(req, res, data);
	console.log("categories");
});


router.post('/delete_categories', function(req, res) {
	/*optional stuff to do after success */
	var id = req.body.id;  

	productController.deleteCategories(req, res, id);
	console.log("categories");
});


router.post('/search_categories', function(req, res) {
	/*optional stuff to do after success */
	var id = req.body.id;  

	productController.searchCategory(req, res, id);
	console.log("categories");
});

router.post('/update_categories', function(req, res) {
	/*optional stuff to do after success */
	var current_id = req.body.current_id;
	var id = req.body.id;
	var cat_name = req.body.cat_name;
	var cat_desc = req.body.cat_desc;

	var data = {id:current_id, values: 'id = "'+id+'", cat_name = "'+cat_name+'", cat_desc = "'+cat_desc+'"' };

	productController.updateCategories(req, res, data);
	console.log("categories");
});




 
module.exports = router;
