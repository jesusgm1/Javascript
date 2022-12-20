var enviar = document.querySelector("#enviar");
var limpiar = document.querySelector("#limpiar");
document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("click", e => {
        if (e.target.matches("#GS")) {
            var cajas = document.querySelectorAll(".EstudiosGS");
            for (var i = 0; i < cajas.length; i++) {
                if (GS.value == cajas[i].value) {
                    cajas[i].checked = true;
                    console.log(cajas[i].id);
                }
                else {
                    cajas[i].checked = false;
                }
            }
        }
        if (e.target.matches("#restablecerGS")) {
            apellidos.value = "";
            nombre.value = "";
            domicilio.value = "";
            sexo.value = "";
            GS.value = "";
            EstudiosGS.value = "";
            observaciones.value = "";
        }
        if (e.target.matches("#GM")) {
            var cajas = document.querySelectorAll(".EstudiosGM");
            for (var i = 0; i < cajas.length; i++) {
                if (GM.value == cajas[i].value) {
                    cajas[i].checked = true;
                    console.log(cajas[i].id);
                }
                else {
                    cajas[i].checked = false;
                }
            }
        }
        if (e.target.matches("#restablecerGM")) {
            Apellidos.value = "";
            Nombre.value = "";
            Domicilio.value = "";
            Sexo.value = "";
            GM.value = "";
            EstudiosGM.value = "";
            Observaciones.value = "";
        }
        if (e.target.matches(".EstudiosGS")) {
            var averias = document.querySelectorAll(".EstudiosGS");
            for (i = 0; i < averias.length; i++) {
                if (averias[i].checked) {
                    var recorridos = averias[i].id;
                }
            }
            console.log(recorridos);
        }
        if (e.target.matches(".EstudiosGM")) { 
            var averias = document.querySelectorAll(".EstudiosGM");
            for (i = 0; i < averias.length; i++) {
                if (averias[i].checked) {
                    var recorridos = averias[i].id;
                }
            }
            console.log(recorridos);
        }
        if (e.target.matches("#enviarGS")) {
            e.preventDefault();
            var sexos = document.querySelectorAll("#sexo");
            for (i = 0;i < sexos.length;i++) {
                if(sexos[i].checked) {
                    console.log(sexos[i].value);
                }
            }
        }

    })
})