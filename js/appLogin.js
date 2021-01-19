//ingresar
const btnIngresa = document.getElementById("btnLogin");
btnIngresa.addEventListener("click", () =>{
    let usuarioL, contraseñaL;
    usuarioL = document.getElementById("usuario").value;
    contraseñaL = document.getElementById("contraseña").value;

    let login = {usuario:usuarioL, contraseña:contraseñaL};

    fetch('http://localhost:1338/miApi/login/', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json=>{
        if(json.mensaje=='Autenticacion correcta')
        {
            window.alert("Acceso correcto");
            location.replace("index.html");
        }
        else{
            alert(json.mensaje);
        }
    });
});