let mysql=require('../../db/mysql');

module.exports = {
    rutaLogin:(req,res)=>{
        let user=req.body.usuario;
        let pwd=req.body.contraseña;
        console.log(req.body);
        console.log(req.body.usuario);
        if (user=='' || pwd==''){
            res.json({mensaje:'Faltan datos'});
            console.log(req.body);
        }
        else
        {
            mysql.query('select * from administradores where usuario=? AND contraseña= ?',[user,pwd],(err,rows,fields)=>{
                if(!err){
                    if(rows.length!=0){
                        res.json({mensaje:'Autenticacion correcta', rows:rows});
                    }
                    else{
                        res.json({mensaje:'Informacion Incorrecta'});
                    }
                }
                else
                    res.json(err);
            })
        }
    }
}
