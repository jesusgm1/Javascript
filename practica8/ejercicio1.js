var items;
var enviar = document.querySelector("#enviar");
var limpiar = document.querySelector("#limpiar");
document.addEventListener("DOMContentLoaded", e => {
    items = document.querySelectorAll("[required]");
    document.addEventListener("click", e => {
        if (e.target.matches("#limpiar")) {
            nombre.value = "";
            password.value = "";
        }
        if (e.target.matches("#enviar")) {
            if (nombre.value == "Admin" && password.value == "1234") {
                document.write("bienvenido a la pagina web");
            }
            else {
                var objetoLista = document.createElement("p");
                var TextoLista = document.createTextNode("usuario o password incorrecto");
                objetoLista.appendChild(TextoLista);
                var boton = document.querySelector("form").appendChild(objetoLista);
            }
        }
    })
})