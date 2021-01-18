var router=require('express').Router();
var juegosController=require('../controllers/juegosController');

router.get('/', function(req,res){
    //res.json({message: 'Conectado a "miApi" Recuerso: Juegos'});
    juegosController.listarJuegos(req,res);
})

router.get('/:id', function(req,res){
    //res.json({message: 'Obtendremos un juego mediante su id' + req.params.id});
    juegosController.buscarJuegoID(req,res);
})

router.post('/',function(req,res){
    //res.json({message: 'Vas a añadir un juego'});
    juegosController.añadirJuego(req,res);
})

router.put('/:id', function(req,res){
    //res.json({message: 'Editaremos mediante su id' + req.params.id});
    juegosController.editarJuegos(req,res);
})

router.delete('/:id', function(req,res){
    //res.json({message: 'Editaremos mediante su id' + req.params.id});
    juegosController.borrarJuegos(req,res);
})

module.exports = router;