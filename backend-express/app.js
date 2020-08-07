const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const karyawanRouter = require('./routes/karyawan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/karyawan', karyawanRouter);

module.exports = app;
