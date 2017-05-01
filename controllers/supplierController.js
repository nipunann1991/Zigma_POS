'use strict';

var productModel = require('../models/productModel');


exports.addSupplier = function( req, res, data){

	var insert_vals = { 
		table: "supplier", 
		columns: "`sup_id`, `sup_name`, `dealer`, `nic`, `address`, `tel`, `fax`, `email`", 
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


exports.getSuppliers = function( req, res){

	productModel.selectAllDataFromTable('supplier',function(data){
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

exports.getSuppliersLastIndex = function( req, res, data){

	var search_vals = data;

	productModel.selectLastIndex( search_vals ,function(data){
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


exports.searchSupplier = function( req, res, data){

	var search_vals = data;

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


exports.updateSupplier = function( req, res, data){

	var update_vals = { 
		table: "supplier", 
		values: data.values, 
		id: "sup_id = "+data.id
		 
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




