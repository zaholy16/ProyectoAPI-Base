var router=require('express').Router();
const clientesController = require('../controllers/clientesController');

router.get('/', function(req,res){
    //res.json({message: 'Conectado a "miApi" Recuerso: Clientes'});
    clientesController.listarClientes(req,res);
})

router.get('/:id', function(req,res){
    //res.json({message: 'Obtendremos un clientes mediante su id' + req.params.id});
    clientesController.buscarID(req,res);
})

router.get('/compras/:id',function(req,res){
    //res.json({message: 'Vas ver los juegos que compro un cliente' + req.params.id});
    clientesController.listarJuegosClientes(req,res);
})

router.post('/',function(req,res){
    //res.json({message: 'Vas a añadir un cliente'});
    clientesController.añadirCliente(req,res);
})

router.post('/compras/:id',function(req,res){
    //res.json({message: 'Vas a añadir un juego que compro un cliente'});
    clientesController.añadirJuegosClientes(req,res);
})

router.put('/:id', function(req,res){
    //res.json({message: 'Editaremos mediante su id' + req.params.id});
    clientesController.editarClientes(req,res);
})

router.delete('/:id', function(req,res){
    //res.json({message: 'Eliminaremos mediante su id' + req.params.id});
    clientesController.borrarClientes(req,res);
})

module.exports = router;