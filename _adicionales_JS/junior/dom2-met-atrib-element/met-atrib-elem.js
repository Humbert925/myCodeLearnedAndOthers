
const rangoEdad = document.querySelector(".rangoEdad");
//document.write(rangoEdad);

/*
El primero va lo que quieres modificar, y luego a lo que se modifica
Se puede modificar con: color, text, range, number, etc. 
*/
rangoEdad.setAttribute("type","range")
valorAtributo = rangoEdad.getAttribute("type");

//document.write(rangoEdad.getAttribute("type"));

document.write(valorAtributo);

