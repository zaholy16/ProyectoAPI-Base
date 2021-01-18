var express=require('express'); //se llama a todo lo que usaremos: express, cors,body-parser
var app=express();
var cors=require('cors');
var bodyParser=require('body-parser');

var port = process.env.PORT || 1338 //puerto que usaremos

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

var router=require('./routes');
app.use('/miApi',router);

//iniciamos el servidor
app.listen(port);
console.log('API escuchando en el puerto '+ port);
