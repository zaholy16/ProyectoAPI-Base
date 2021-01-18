//cargar clientes
const btnCargar = document.getElementById("btnCargar");
btnCargar.addEventListener("click", () => {
  fetch('http://localhost:1338/miApi/clientes', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
    .then((response) => response.json())
    .then((json) => {
      let opciones = "";
      json.forEach((element) => {
        opciones += `<option value='${element.id_cliente}'> ${element.nombre}</option>`;
      });
      document.getElementById("idClientes").innerHTML = opciones;
    });
});

//seleccionar y mostrar clientes
document.getElementById('idClientes').addEventListener("change", () => {
  let eleccion=document.getElementById("idClientes").value;
  fetch('http://localhost:1338/miApi/clientes/' + eleccion, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((json) => {
      let clientesInfo = "";
      json.forEach((element) => {
        clientesInfo = `<div>
            <p>......................................</p>
            </p><strong>ID: </strong>${element.id_cliente}<br>
            </p><strong>Nombre: </strong>${element.nombre}<br>
            <p><strong>Correo: </strong>${element.correo}</p>
            <p><strong>Telefono: </strong>${element.telefono}</p>
            <p><strong>Edad: </strong>${element.edad}</p>
            <p>......................................</p>
          </div>`;
        });
        document.getElementById("datosCliente").innerHTML = clientesInfo;
    });
});

//listar todos los clientes
const btnListar=document.getElementById('btnListar');
btnListar.addEventListener('click',(e)=>{
    fetch('http://localhost:1338/miApi/clientes', {
        method: 'GET', 
    })
    .then((response) => response.json())
    .then((json) => {
        let clientes = "";
        json.forEach((element) => {
          clientes += `
            <div>
              <p>......................................</p>
              </p><strong>ID:</strong>${element.id_cliente}<br>
              </p><strong>Nombre:</strong>${element.nombre}<br>
              <p><strong>Correo:</strong>${element.correo}</p>
              <p><strong>Telefono:</strong>${element.telefono}</p>
              <p><strong>Edad:</strong>${element.edad}</p>
            </div>`;
        });
        document.getElementById("clientes").innerHTML = clientes;
    });
});

//añadir clientes
const btnAñadir=document.getElementById('btnAñadir');
btnAñadir.addEventListener('click', (e)=>{

  let nombreN, correoN, telefonoN,edadN;
  nombreN=document.getElementById("nombre").value;
  correoN=document.getElementById("correo").value;
  telefonoN=document.getElementById("telefono").value;
  edadN=document.getElementById("edad").value;

  var clienteN = {nombre:nombreN, correo:correoN, telefono:telefonoN, edad:edadN};

  fetch('http://localhost:1338/miApi/clientes', {
        method: 'POST',
        body: JSON.stringify(clienteN),
        headers:{
          'Content-Type': 'application/json'
      }
  })
  .then((response) => response.json())
  .then(json => {
    window.alert(json.mensaje)
  }); 
});

//editar info clientes
const btnEditar=document.getElementById("btnEditar");
btnEditar.addEventListener("click", () =>{

  let eleccion=document.getElementById("idClientes").value;

  let nombreE, correoE, telefonoE,edadE;
  nombreE=document.getElementById("nombre").value;
  correoE=document.getElementById("correo").value;
  telefonoE=document.getElementById("telefono").value;
  edadE=document.getElementById("edad").value;

  var clienteE = {nombre:nombreE, correo:correoE, telefono:telefonoE, edad:edadE};

  fetch('http://localhost:1338/miApi/clientes/' + eleccion, {
    method: 'PUT',
    body: JSON.stringify(clienteE),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
  .then(response => window.alert("Editado!!", response));

})

//eliminar cliente si no tiene compras
const btnEliminar=document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", () =>{

  let eleccion=document.getElementById("idClientes").value;

  fetch('http://localhost:1338/miApi/clientes/' + eleccion, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then(response => window.alert("Eiminado!!", response));
});

//mostrar las compras de cada cliente
const btnCompras=document.getElementById("btnCompra");
btnCompras.addEventListener("click", () =>{

  let eleccion=document.getElementById("idClientes").value;

  fetch('http://localhost:1338/miApi/clientes/compras/'+ eleccion, {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((json) => {
    let comprasInfo = "";
    json.forEach((element) => {
        element.forEach((compras) => {
            comprasInfo += `<div>
            <p>......................................</p>
            <p><strong>ID: </strong>${compras.id_juego}</p>
            <p><strong>Nombre: </strong>${compras.juego}</p>
            <p><strong>Precio: </strong>$${compras.precio}</p>
            </div>`;
        });
    });
    document.getElementById("compras").innerHTML = comprasInfo; 
  });
});

//añadirle compras a un cliente *pendiente*


//API 3ROs
const btnJuegos=document.getElementById('btnJuegos');
btnJuegos.addEventListener('click', (e) =>{
  fetch('https://api.rawg.io/api/games', {
    method: 'GET',
  })
  .then(response => response.json())
  .then(json=> {
      let juegoInfo = "";
      for(let i=0; i<json.results.length; i++)
      {
        juegoInfo += 
        `<div>
          <p>......................................</p>
          <p><strong>Nombre: </strong>${json.results[i].name}</p>
          <p><strong>Fecha de lanzamiento: </strong>${json.results[i].released}</p>
          <p><strong>Clasificación: </strong>${json.results[i].rating_top}</p>
        </div>`
      }
      document.getElementById("juegos").innerHTML = juegoInfo;
  });
});
    

