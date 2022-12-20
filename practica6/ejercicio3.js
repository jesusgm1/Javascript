var d=document;

d.addEventListener("mousemove",e=> {
    if(e.target.matches("body")) {
        d.querySelector("#caja").style.backgroundColor="blue";
        var x=e.clientX;
        var y=e.clientY;
        d.querySelector("#caja").innerHTML = "x: "+ x +" y: "+ y;
    }
})

d.addEventListener("keypress",e=> {
    if(e.target.matches("body")) {
        d.querySelector("#caja").style.backgroundColor="red";
        var tecla=e.key;
        var codigo=e.keyCode;
        d.querySelector("#caja").innerHTML = "tecla: " + tecla + " cod: " +codigo;
    }
})
