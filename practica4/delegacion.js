var d=document;

d.addEventListener("click",e=> {
    if(e.target.matches("#masZuheros")) {
        console.log(e);
        d.querySelector("#Zuheros").hidden=false;
        d.querySelector("#masZuheros").hidden=true;
    }
    if(e.target.matches("#menosZuheros")) {
        console.log(e);
        d.querySelector("#Zuheros").hidden=true;
        d.querySelector("#masZuheros").hidden=false;
    }
    if(e.target.matches("#masCabra")) {
        console.log(e);
        d.querySelector("#Cabra").hidden=false;
        d.querySelector("#masCabra").hidden=true;
    }
    if(e.target.matches("#menosCabra")) {
        console.log(e);
        d.querySelector("#Cabra").hidden=true;
        d.querySelector("#masCabra").hidden=false;
    }
d.addEventListener("mouseover",e=>{
    switch(e.target.id){
         case `imagen${imagenuno}` :
         console.log("estoy en la imagen 1");
    }
})

})