var d = document;
d.addEventListener("keyup", e => {
    var texto = d.querySelector("#texto");
    var mensaje = d.querySelector("div");
    mensaje.textContent = (texto.maxLength - texto.value.length) + " caracteres restamtes";
})