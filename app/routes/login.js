var router=require('express').Router();
var loginController=require('../controllers/loginController');

router.post('/', function(req,res){
    loginController.rutaLogin(req,res);
})

module.exports = router;