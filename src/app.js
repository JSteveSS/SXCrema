const path = require('path');
const express = require('express');
const morgan = require('morgan');

// importing connection to db
require("./database")

const app = express();
app.use(express.json());

// importing routes
const indexRoutes = require('./routes/index');

// routes
app.use('/', indexRoutes);

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

// static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});