var router=require('express').Router();

var juegos=require('./juegos');
var clientes=require('./clientes');
var login=require('./login');
router.use('/clientes', clientes);
router.use('/juegos', juegos);
router.use('/login', login); 

router.get('/',function(req,res){
    res.status(200).json({message: 'Estas conectado ami API'})
});

//localhost:1338/miApi
module.exports = router;