CREATE DEFINER=`root`@`localhost` PROCEDURE `mostrarJuegos`(IN id_clienteN int)
BEGIN
	select clientes.id_cliente, clientes.nombre, compras.id_juego, videojuegos.juego, videojuegos.precio from
	clientes inner join compras on clientes.id_cliente=compras.id_cliente 
	inner join videojuegos on compras.id_juego=videojuegos.id_juego
	where clientes.id_cliente = id_clienteN;
END