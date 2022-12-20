var items;
var boton=document.querySelector("#enviar");
document.addEventListener("DOMContentLoaded" ,e => {
    items = document.querySelectorAll("[required]");
   document.addEventListener("keyup", e => {
    var correcto = true;
    if(apellidos.value == "") {
        correcto = false;
    }
    if(nombre.value == "") {
        correcto = false;
    }
    if(usuario.value == "") {
        correcto = false;
    }
    if(password.value == "") {
        correcto = false;
    }
    if(email.value == "") {
        correcto = false;
    }
    if(movil.value == "") {
        correcto = false;
    }
    if(observaciones.value == "") {
        correcto = false;
    }
    if(correcto) {
     boton.disabled = false;
    }
    else {
        boton.disabled = true;
    }
   })
})