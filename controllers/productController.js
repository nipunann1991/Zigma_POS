'use strict';

var productModel = require('../models/productModel');



exports.getCategories = function( req, res){

	productModel.selectAllDataFromTable('categories',function(data){
		if (data) {
			//console.log(data); 
			var json_object = { status: 200, data:data };

			res.write(JSON.stringify(json_object, null, 2 ));
            res.send();
		}else{
			res.write(JSON.stringify({
                status: 404,
                message: 'Data cannot be found'
            }));
            res.send();
		}
	});

}


exports.addCategories = function( req, res, data){

	var insert_vals = { 
		table: "categories", 
		columns: "`id`, `cat_name`, `cat_desc`", 
		values: data
	}

	productModel.addDatatoTable( insert_vals , function(data){
		if (data.affectedRows > 0) {
			//console.log(data);

			var json_object = { status: 200, message:'Data inserted successfully' };
			res.write(JSON.stringify(json_object, null, 2 ));
            res.send();

		}else if(data.status == 500){ 

			var json_object = { status: 500, message: 'Data insertion faild' };
			res.write(JSON.stringify(json_object, null, 2 ));
            res.send();
		}
	});

}

exports.deleteCategories = function( req, res, id){

	var delete_vals = { 
		table: "categories", 
		data: 'id = '+id, 
		 
	}

	productModel.removeDatafromTable( delete_vals , function(data){
		if (data.affectedRows > 0) {
			//console.log(data);

			var json_object = { status: 200, message:'Data deleted successfully' };
			res.write(JSON.stringify(json_object, null, 2 ));
            res.send();

		}else if(data.status == 500){ 

			var json_object = { status: 500, message: 'Data deletion faild' };
			res.write(JSON.stringify(json_object, null, 2 ));
            res.send();
		}
	});

}


exports.searchCategory = function( req, res, id){

	var search_vals = { 
		table: "categories", 
		data: 'id = '+id, 
	};

	productModel.selectedDataFromTable( search_vals , function(data){
		if (data) {
			//console.log(data); 
			var json_object = { status: 200, data:data };

			res.write(JSON.stringify(json_object, null, 2 ));
            res.send();
		}else{
			res.write(JSON.stringify({
                status: 404,
                message: 'Data cannot be found'
            }));
            res.send();
		}
	});

}


exports.updateCategories = function( req, res, data){

	var update_vals = { 
		table: "categories", 
		values: data.values, 
		id: "id = "+data.id
		 
	}

	productModel.updateDatatoTable( update_vals , function(data){
		if (data.affectedRows > 0) {
			//console.log(data);

			var json_object = { status: 200, message:'Data updated successfully' };
			res.write(JSON.stringify(json_object, null, 2 ));
            res.send();

		}else if(data.status == 500){ 

			var json_object = { status: 500, message: 'Data update faild' };
			res.write(JSON.stringify(json_object, null, 2 ));
            res.send();
		}
	});

}

