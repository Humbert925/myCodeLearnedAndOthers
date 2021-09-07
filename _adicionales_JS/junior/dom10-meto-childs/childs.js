const contenedor = document.querySelector (".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h4_new = document.createElement("H4");
h4_new.innerHTML = "Titulo h4 new";
const h4_old = document.querySelector(".h4")

//contenedor.replaceChild(h4_new, h4_old)
//contenedor.removeChild(h4_old)
//contenedor.hasChildNodes

let respuesta = h4_old.hasChildNodes();

if (respuesta){
    document.write("El elmento tiene hijos");
} else {
    document.write("El elemento <b>NO</b> tiene hijos")
}
