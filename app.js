var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error = new Error('route not found');
  error.status = 404;
  next(error)
});

// error handler
app.use(function(error, req, res, next) {
  res.status(error.status || 500);
  res.send({
      status: error.status || 500,
      message: error.message
  })
});

module.exports = app;
