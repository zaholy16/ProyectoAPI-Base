let mysql=require('../../db/mysql');
//let juego=require('../models/juegoModel');

module.exports = {
    añadirCliente:(req,res)=>{
        console.log(req.body);
        if(req.body.nombre=='' || req.body.correo=='' || req.body.edad=='' || req.body.telefono=='')
        {
            res.json({mensaje:'Faltan datos'});
        }
        else
        {
            mysql.query('INSERT INTO clientes SET ?',req.body,(err,rows,fields)=>{
                if(!err)
                   res.json({mensaje: "Cliente Agregado"});
                else
                   res.json(err);
             });
        }
    },

    buscarID:(req,res)=>{
        let id=req.params.id;
        mysql.query('SELECT * from clientes where id_cliente=?',id, (err,rows,fields)=>{
            if(!err)
                res.json(rows);
            else
                res.json(err);
        });
    },

    listarClientes:(req,res)=>{
        mysql.query('SELECT * from clientes', (err,rows,fields)=>{
            if(!err)
                res.json(rows);
            else
                res.json(err);
        })
    },

    editarClientes:(req,res)=>{
        let {nombre,correo,telefono,edad} = req.body;
        let id=req.params.id;
        if(req.body.nombre=='' || req.body.correo=='' || req.body.edad=='' || req.body.telefono=='')
        {
            res.json({mensaje:'Faltan datos'});
        }
        else
        {
        mysql.query('UPDATE clientes set nombre = ?, correo = ?, telefono = ?, edad = ? where id_cliente = ?',[nombre,correo,telefono,edad,id],(err,rows,fields)=>{
            if(!err)
                res.json({mensaje: "Cliente Editado"});
            else
                res.json(err);
            })
        }
    },

    borrarClientes:(req,res)=>{
        let id=req.params.id;
        //aqui mando llamar al procedimiento 
        mysql.query('CALL borraroNoClientes (?)',id, (err,rows,fields)=>{
            if(!err){
                res.json({mensaje: "Cliente Eliminado"});;
            }
            else
                res.json({mensaje: "Error. No puedes eliminar a este cliente, ya que tiene deudas"});
        });
    },

    listarJuegosClientes:(req,res)=>{
        let id=req.params.id;
        //aqui mando llamar al procedimiento con los inner join
        mysql.query('CALL mostrarJuegos (?)', id, (err,rows,fields)=>{
            if(!err){
                rows.pop();
                res.json (rows);
            }
            else
                res.json(err);
        })
    },

    añadirJuegosClientes:(req,res)=>{
        //let id_juego=req.body.id_juego;
        let id_juego=req.params.idJ;
        let id=req.params.id;
        mysql.query('INSERT INTO compras SET id_cliente = ?, id_juego = ?',[id,id_juego], (err,rows,fields)=>{
            if(!err)
                res.json({mensaje:'Compra Agregada'});
            else
                res.json(err);
        })
    }
}