var d=document;
d.addEventListener("click",e =>{
    if(e.matches("#sexo")) {
      var usuario = d.querySelector("#sexo");
      if(usuario == " ") {
        d.write("meta sexo");
      }
      else {
        d.write(usuario);
      }
    }
} )