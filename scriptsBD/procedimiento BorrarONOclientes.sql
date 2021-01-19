CREATE DEFINER=`root`@`localhost` PROCEDURE `borraroNoClientes`(IN id_clienteN int)
BEGIN
	declare existentes boolean;
    set existentes = (select count(id_compra) from compras where id_cliente=id_clienteN);
    
    if existentes = false then
		DELETE from clientes where id_cliente=id_clienteN;
	else 
		select ("Error. No puedes eliminar a este cliente") as error;
	end if;
    
END