const express = require('express');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const myAccountsRouter = require('./routes/accounts');

const bodyParser = require("body-parser");

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

// routes
app.use('/users', usersRouter);
app.use('/my-accounts/', myAccountsRouter)

module.exports = app;
