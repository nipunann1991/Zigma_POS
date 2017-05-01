'use strict';
var connection = require('../db.js');


/* 
* get all product categories
*/



exports.selectAllDataFromTable = function (table, callback){
	//console.log('get all product categories')

	var query = 'SELECT * FROM '+table;
	connection.query( query , function (err,rows){

		if (err) {
			console.log(err)
			return callback({
				status: 500,
				message: 'query error',
			});

		}else{
			console.log('Success')
			return callback(rows);
		}

	});

	 
}


exports.selectLastIndex = function (search_vals, callback){
	//console.log('get all product categories')

	var query = 'SELECT '+search_vals.search_col+' FROM '+search_vals.table+' ORDER BY '+search_vals.search_col+' DESC LIMIT 1 ';
	connection.query( query , function (err,rows){

		if (err) {
			console.log(err)
			return callback({
				status: 500,
				message: 'query error',
			});

		}else{
			console.log('Success')
			return callback(rows);
		}

	});

	 
}

exports.selectedDataFromTable = function (search_vals, callback){
	//console.log('get all product categories')

	var query = 'SELECT * FROM '+search_vals.table+' WHERE '+search_vals.data+'';
	connection.query( query , function (err,rows){

		if (err) {
			console.log(err)
			return callback({
				status: 500,
				message: 'query error',
			});

		}else{
			console.log('Success')
			return callback(rows);
		}

	});

	 
}


exports.addDatatoTable = function (insert_vals, callback){
	//console.log('get all product categories')

	var query = 'INSERT INTO '+insert_vals.table+' ('+insert_vals.columns+') VALUES ('+insert_vals.values+');';
	connection.query( query , function (err,rows){

		if (err) {
			console.log(err)
			return callback({
				status: 500,
				message: 'query error',
			});

		}else{
			console.log('Success')
			return callback(rows);
		}

	});

	 
}

exports.removeDatafromTable = function (delete_vals, callback){
	//console.log('get all product categories')

	var query = 'DELETE FROM '+delete_vals.table+' WHERE '+delete_vals.data+'';
	connection.query( query , function (err,rows){

		if (err) {
			console.log(err)
			return callback({
				status: 500,
				message: 'query error',
			});

		}else{
			console.log('Success')
			return callback(rows);
		}

	});

	 
}


exports.updateDatatoTable = function (update_vals, callback){
	//console.log('get all product categories')

	var query = 'UPDATE '+update_vals.table+' SET '+update_vals.values+' WHERE '+update_vals.id+'';
	connection.query( query , function (err,rows){

		if (err) {
			console.log(err)
			return callback({
				status: 500,
				message: 'query error',
			});

		}else{
			console.log('Success')
			return callback(rows);
		}

	});

	 
}




