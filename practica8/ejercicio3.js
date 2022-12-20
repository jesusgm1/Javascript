var items;
document.addEventListener("DOMContentLoaded", e => {
    items = document.querySelectorAll("form");
    document.addEventListener("click", e => {
        if (e.target.matches("#FP")) {
            if (FP.value == "SMR") {
                var ModulosGM = document.querySelector("#AsignaturasGM");
                ModulosGM.hidden = false;
                document.querySelector("#AsignaturasGS").hidden = true;
            }
            if (FP.value == "DAW") {
                var ModulosGS = document.querySelector("#AsignaturasGS");
                ModulosGS.hidden = false;
                document.querySelector("#AsignaturasGM").hidden = true;
            }
        }
        if (e.target.matches("#curso")) {
            if (curso.value == "1" && FP.value == "SMR") {
                var cajas = document.querySelectorAll(".EstudiosGM");
                for (var i = 0; i < cajas.length; i++) {
                    if (curso.value == cajas[i].value) {
                        cajas[i].checked = true;
                    }
                    else {
                        cajas[i].checked = false;
                    }
                }
            }
            if (curso.value == "2" && FP.value == "SMR") {
                var cajas = document.querySelectorAll(".EstudiosGM");
                for (var i = 0; i < cajas.length; i++) {
                    if (curso.value == cajas[i].value) {
                        cajas[i].checked = true;
                    }
                    else {
                        cajas[i].checked = false;
                    }
                }
            }
            if (curso.value == "1" && FP.value == "DAW") {
                var cajas = document.querySelectorAll(".EstudiosGS");
                for (var i = 0; i < cajas.length; i++) {
                    if (curso.value == cajas[i].value) {
                        cajas[i].checked = true;
                    }
                    else {
                        cajas[i].checked = false;
                    }
                }
            }
            if (curso.value == "2" && FP.value == "DAW") {
                var cajas = document.querySelectorAll(".EstudiosGS");
                for (var i = 0; i < cajas.length; i++) {
                    if (curso.value == cajas[i].value) {
                        cajas[i].checked = true;
                    }
                    else {
                        cajas[i].checked = false;
                    }
                }
            }
        }
    })
})