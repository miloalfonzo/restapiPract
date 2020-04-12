const express = require('express');
const morgan = require('morgan');
const app = express();


//config
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./routes/index'));
app.use('/api/movies' ,require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//comenzando el servidor 
app.listen(app.get('port'), () => {
    console.log(`iniciando en server ${app.get('port')}`)
} )