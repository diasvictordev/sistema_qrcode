const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const cookieParser = require('cookie-parser')
const sessionParser = require('express-session');
const app = express();
const connection = require('./database/config');


connection.authenticate().then(()=>{
    console.log('Conexao feita com o banco de dados')
})
.catch((msgErro)=>{
    console.log(msgErro)
})

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use(cookieParser());
app.use(sessionParser({ secret: 'QRCode', resave: false, saveUninitialized: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, () => console.log('listening on http://localhost:3000'));
