let mysql=require('../../db/mysql');
//let juego=require('../models/juegoModel');

module.exports = {
    añadirJuego:(req,res)=>{
        console.log(req.body);
        mysql.query('INSERT INTO videojuegos SET ?',req.body,(err,rows,fields)=>{
           if(!err)
              res.json({messaje: "Juego Agregado"});
           else
              res.json(err);
        });
    },

    buscarJuegoID:(req,res)=>{
        let id=req.params.id;
        mysql.query('SELECT * from videojuegos where id_juego=?',id, (err,rows,fields)=>{
            if(!err)
                res.json(rows);
            else
                res.json(err);
        });
    },

    listarJuegos:(req,res)=>{
        mysql.query('SELECT * from videojuegos', (err,rows,fields)=>{
            if(!err){    
                res.json (rows);
            }
            else
                res.json(err);
        })
    },

    editarJuegos:(req,res)=>{
        let {nombre,precio,año,rango} = req.body;
        let id=req.params.id;
        mysql.query('UPDATE videojuegos set nombre = ?, precio = ?, año = ?, rango = ? where id_juego = ?',[nombre,precio,año,rango,id],(err,rows,fields)=>{
            if(!err)
                res.json({messaje: "Juego Editado"});
            else
                res.json(err);
        })
    }
}