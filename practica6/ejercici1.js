var d = document;

d.addEventListener("click", e => {
    //con estos metodos cambiamos el color de todos los elementos
    if (e.target.matches("#ruby")) {
        d.querySelector("#ruby").style.color = "red";
        d.querySelector("#hanamaru").style.color = "black";
        d.querySelector("#yohane").style.color = "black";
    }
    if (e.target.matches("#hanamaru")) {
        d.querySelector("#ruby").style.color = "black";
        d.querySelector("#hanamaru").style.color = "blue";
        d.querySelector("#yohane").style.color = "black";
    }
    if (e.target.matches("#yohane")) {
        d.querySelector("#ruby").style.color = "black";
        d.querySelector("#hanamaru").style.color = "black";
        d.querySelector("#yohane").style.color = "green";
    }
    //en estos metodos,modificamos el fontsize para aumentar o
    //disminuir el tamaño de letra
    if (e.target.matches("#aumentarR")) {
        d.querySelector("#ruby").style.fontSize = "50px";
    }
    if (e.target.matches("#disminuirR")) {
        d.querySelector("#ruby").style.fontSize = "10px";
    }
    if (e.target.matches("#defectoR")) {
        d.querySelector("#ruby").style.fontSize = "";
    }
    if (e.target.matches("#aumentarH")) {
        d.querySelector("#hanamaru").style.fontSize = "50px";
    }
    if (e.target.matches("#disminuirH")) {
        d.querySelector("#hanamaru").style.fontSize = "10px";
    }
    if (e.target.matches("#defectoH")) {
        d.querySelector("#hanamaru").style.fontSize = "";
    }
    if (e.target.matches("#aumentarY")) {
        d.querySelector("#yohane").style.fontSize = "50px";
    }
    if (e.target.matches("#disminuirY")) {
        d.querySelector("#yohane").style.fontSize = "10px";
    }
    if (e.target.matches("#defectoY")) {
        d.querySelector("#yohane").style.fontSize = "";
    }
    //en estos metodo intenta mostrar y ocultar texto
    //para ello intentamos comprobar si existe el atributo
    //y dependiendo de si existe o no,tomara un valor u otro
    if (e.target.matches("#ocultarR")) {
        if (!(d.querySelector("#ruby").hasAttribute("hidden"))) {
            d.querySelector("#ruby").hidden = true;
            d.querySelector("#ocultarR").innerHTML = "mostrar a ruby";
        }
        else {
            d.querySelector("#ruby").hidden = false;
            d.querySelector("#ocultarR").innerHTML = "ocultar a ruby";
        }
    }
    if (e.target.matches("#ocultarH")) {
        if (!(d.querySelector("#hanamaru").hasAttribute("hidden"))) {
            d.querySelector("#hanamaru").hidden = true;
            d.querySelector("#ocultarH").innerHTML = "mostrar a hanamaru";
        }
        else {
            d.querySelector("#hanamaru").hidden = false;
            d.querySelector("#ocultarH").innerHTML = "ocultar a hanamaru";
        }
    }
    if (e.target.matches("#ocultarY")) {
        if (!(d.querySelector("#yohane").hasAttribute("hidden"))) {
            d.querySelector("#yohane").hidden = true;
            d.querySelector("#ocultarY").innerHTML = "mostrar a yohane";
        }
        else {
            d.querySelector("#yohane").hidden = false;
            d.querySelector("#ocultarY").innerHTML = "ocultar a yohane";
        }
    }
})



console.log(d.querySelectorAll("p"));