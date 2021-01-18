const mysql=require('mysql');

const mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'videojuegos'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Base conectada');
    }
});

module.exports=mysqlConnection;