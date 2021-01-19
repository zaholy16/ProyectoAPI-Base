create database videojuegos;
use videojuegos;

create table clientes (
	id_cliente int auto_increment,
    nombre varchar(30) not null,
    correo varchar(30) not null,
	telefono varchar(30) not null,
    edad int not null,
    primary key(id_cliente)
);

create table videojuegos (
	id_juego int auto_increment primary key,
    nombre varchar(40) not null,
    precio int not null,
    año int not null,
    rango varchar(40) not null
);

create table compras (id_compra int auto_increment primary key, id_cliente int not null, id_juego int not null,
	foreign key(id_cliente) references clientes(id_cliente), foreign key(id_juego) references videojuegos(id_juego));
    
create table administradores (
	id_admin int auto_increment primary key,
    usuario varchar(30) not null,
    contraseña varchar(30) not null
);

describe videojuegos;
describe clientes;
describe compras;

select * from videojuegos;
select * from clientes;
select * from compras;
select * from administradores;

/*info admins*/
insert into administradores values (2,"Mezly","mez");
insert into administradores values (1,"Petunia","petu");

/*info juegos*/
insert into videojuegos values (1,"New Super Mario Bros",1168.28,201,"E","SinglePlayer, Multiplayer");
insert into videojuegos values (2,"Farcry5",799,2018,"M","SinglePlayer, Multiplayer");
insert into videojuegos values (3,"FIFA 21",925,2020,"E","SinglePlayer, Multiplayer");
insert into videojuegos values (4,"Fornite",0,2017,"M","SinglePlayer, Multiplayer, Cooperative");
insert into videojuegos values (5,"Assassin's Creed: Valhalla",1500,2020,"RP","SinglePlayer");
insert into videojuegos values (6,"Los Sims 4",786.25,2014,"T","SinglePlayer");

/*info clientes*/
insert into clientes values (29,"Mezly Mondragón","mmondragon@ucol.mx","314-337-3250",19);
insert into clientes values (30,"Wendolyn Duran","wduran@ucol.mx","314-174-1810",20);
insert into clientes values (31,"Luis Ignacio","ldeniz@ucol.mx","314-117-2151",19);
insert into clientes values (32,"Salvador Mondragon","smondragon@ucol.mx","314-144-3218",40);

/*info compras*/
insert into compras values (11,29,1);
insert into compras values (12,31,3);
insert into compras values (13,30,1);
insert into compras values (14,32,6);
insert into compras values (15,29,5);
insert into compras values (16,30,4);
insert into compras values (17,32,2);
