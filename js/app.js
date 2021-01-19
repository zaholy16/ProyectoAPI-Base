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

//cargar juegos
const btnCargarJuegos = document.getElementById("btnCargarJuegos");
btnCargarJuegos.addEventListener("click", () => {
  fetch('http://localhost:1338/miApi/juegos', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
    .then((response) => response.json())
    .then((json) => {
      let opciones = "";
      json.forEach((element) => {
        opciones += `<option value='${element.id_juego}'> ${element.juego}</option>`;
      });
      document.getElementById("idJuego").innerHTML = opciones;
    });
});


//seleccionar y mostrar clientes
document.getElementById('idClientes').addEventListener("change", () => {
  
  let eleccion=document.getElementById("idClientes").value;
  let div = document.getElementById("datosCliente");

  fetch('http://localhost:1338/miApi/clientes/' + eleccion, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((json) => {
      let clientesInfo = "";
      div.style.display='inline';
      json.forEach((element) => {
        clientesInfo = `<div>
            <p>......................................</p>
            <p><strong>ID: </strong>${element.id_cliente}</p>
            <p><strong>Nombre: </strong>${element.nombre}</p>
            <p><strong>Correo: </strong>${element.correo}</p>
            <p><strong>Telefono: </strong>${element.telefono}</p>
            <p><strong>Edad: </strong>${element.edad}</p>
            <p>......................................</p>
          </div>`;
        });
        document.getElementById("datosCliente").innerHTML = clientesInfo;
    });
});

//seleccionar y mostrar juegos
document.getElementById('idJuego').addEventListener("change", () => {

  let eleccion=document.getElementById("idJuego").value;
  let div = document.getElementById("datosJuegos");

  fetch('http://localhost:1338/miApi/juegos/' + eleccion, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((json) => {
      let juegoss = "";
      div.style.display='inline';
      json.forEach((element) => {
        juegoss = `<div style="background-color:#ADF8E3;">
            <p>....................................................................</p>
            <p><strong>ID: </strong>${element.id_juego}</p>
            <p><strong>Juego: </strong>${element.juego}</p>
            <p><strong>Precio: </strong>$${element.precio}</p>
            <p><strong>Rango de edad: </strong>${element.rango}</p>
            <p><strong>Modo de juego: </strong>${element.modoJuego}</p>
            <p>....................................................................</p>
          </div>`;
        });
        document.getElementById("datosJuegos").innerHTML = juegoss;
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
  .then(json => {
    window.alert(json.mensaje)
  });

})

//eliminar cliente si no tiene compras
const btnEliminar=document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", () =>{

  let eleccion=document.getElementById("idClientes").value;

  fetch('http://localhost:1338/miApi/clientes/' + eleccion, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then(json => {
      window.alert(json.mensaje);
    });
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
    mostrar('compras', 'btnCompra');
    json.forEach((element) => {
        element.forEach((compras) => {
            comprasInfo += `<div>
            <p>...........................................................</p>
            <p><strong>Nombre: </strong>${compras.juego}</p>
            <p><strong>Precio: </strong>$${compras.precio}</p>
            <p>...........................................................</p>
            </div>`;
        });
    });
    document.getElementById("compras").innerHTML = comprasInfo; 
  });
});

//añadirle compras a un cliente
const btnCompraJuego=document.getElementById('btnCompraJuego');
btnCompraJuego.addEventListener('click', (e)=>{

  let eleccionCliente=document.getElementById("idClientes").value;
  let eleccionJuego=document.getElementById("idJuego").value;
 
  var juego = {cliente:eleccionCliente, juego:eleccionJuego};

  fetch('http://localhost:1338/miApi/clientes/compras/' + eleccionCliente + '/' + eleccionJuego,  {
        method: 'POST',
        body: JSON.stringify(juego),
        headers:{
          'Content-Type': 'application/json'
      }
  })
  .then((response) => response.json())
  .then(json => {
    window.alert(json.mensaje)
  }); 
});

//API 3ROs
const btnJuegos=document.getElementById('btnJuegos');
btnJuegos.addEventListener('click', (e) =>{

  fetch('https://api.rawg.io/api/games', {
    method: 'GET',
  })
  .then(response => response.json())
  .then(json=> {
      let juegoInfo = "";
      mostrar('juegos', 'btnJuegos');
      for(let i=0; i<json.results.length; i++)
      {
        juegoInfo += 
        `<div>
          <p>..........................................................................</p>
          <p><strong>Nombre: </strong>${json.results[i].name}</p>
          <p><strong>Fecha de lanzamiento: </strong>${json.results[i].released}</p>
          <p><strong>Clasificación: </strong>${json.results[i].rating_top}</p>
        </div>`
      }
      document.getElementById("juegos").innerHTML = juegoInfo;
  });
});


function ocultar(div, boton){
  let divv, botonn;
  botonn = document.getElementById(boton);
  botonn.addEventListener('click', ()=>{
    divv= document.getElementById(div);
    divv.style.display='none';
  });
};

function mostrar(div, boton){
  document.getElementById(boton).addEventListener('click', ()=>{
    let divb = document.getElementById(div);
    divb.style.display='inline'
  });
};

ocultar('datosCliente', 'btnOC');
ocultar('datosJuegos', 'btnOJ');
ocultar('compras', 'btnOCo');
ocultar('juegos', 'btnOA');


