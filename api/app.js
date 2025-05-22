const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const artisanRouter = require('./routes/artisans');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artisans', artisanRouter);

module.exports = app;
