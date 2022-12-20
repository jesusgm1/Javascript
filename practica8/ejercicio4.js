var items;
document.addEventListener("DOMContentLoaded", e => {
    items = document.querySelectorAll("formulario1");
    document.addEventListener("click", e => {
        if (e.target.matches("#observaciones1")) {
            var cuadro = document.querySelector("#observaciones1");
            cuadro.style.backgroundColor = "black";
            cuadro.style.color = "white";
        }
        if (e.target.matches(".deporte")) {
            var reparaciones = document.querySelectorAll(".deporte");
            var modelo = document.querySelector("#detras");
            var portatil = document.querySelector("#mostrarP");
            for (i = 0; i < reparaciones.length; i++) {
                if (portatil.checked) {
                   modelo.hidden = false;
            }
            else {
                modelo.hidden = true;
            }
        }
    }
        if (e.target.matches(".sintomas")) {
            var averias = document.querySelectorAll(".sintomas");
            for (i = 0; i < averias.length; i++) {
                if (averias[i].checked) {
                    var recorridos = averias[i].id;
                }
            }
            console.log(recorridos);
        }
        if (e.target.matches("#Enviar1")) {
            var averias = document.querySelector(".sintomas");
            if (!averias.checked) {
                e.preventDefault();
                var parrafo = document.createElement("p");
                var mensaje = document.createTextNode("necesita un sintoma para enviar");
                parrafo.appendChild(mensaje);
                document.querySelector("#error").appendChild(parrafo);
            }
        }
        
    })
})