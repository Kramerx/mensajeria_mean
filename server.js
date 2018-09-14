const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const rutaMensajes = require('./rutasServer/mensajes');
const rutaUsuarios = require('./rutasServer/usuarios');

const mongoose = require('mongoose');
mongoose.connect('mongodb://tallerMean:mean2018.@ds255262.mlab.com:55262/mean-taller');

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/', rutaMensajes);
app.use('/', rutaUsuarios);

// static
app.use(express.static(__dirname + '/front-end/dist'));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./front-end/dist/index.html'))
});

app.listen(3000, () => console.log('server on port 3000'));