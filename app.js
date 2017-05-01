var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 

/*=======================================================================**/

/*
 *  define UI routes
 *
 */

var index_ui = require('./routes/ui/home');
var category_ui = require('./routes/ui/category');
var supplier_ui = require('./routes/ui/supplier');

/*
 *  define API routes
 *
 */
 
var products = require('./routes/api/products');
var supplier = require('./routes/api/supplier');


/*=======================================================================**/
/*
 *  UI routes
 *  ex : app.use('/ui/students', student);
 */


app.use('/', index_ui);
app.use('/category', category_ui);
app.use('/supplier', supplier_ui);


/*
 *  API routes
 *  ex : app.use('/api/students', student);
 */

app.use('/api/products',products);
app.use('/api/supplier',supplier);



/*=======================================================================**/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
