const titulo = document.querySelector (".tituloh4");

/*
SE USO ESTA SINTAXIS y agregó clase "grande"
<h4 class="tituloh4">elemento a modificar</h4> **HTML
titulo.classList.add("grande"); *JS* */ 

/*
SE USO ESTA SINTAXIS y retiro la clase "grande"
<h4 class="tituloh4 grande">elemento a modificar</h4>
titulo.classList.remove("grande");*/

/*
SE USO ESTA SINTAXIS y mostro en pantalla "grande"
*HTML*
<h4 class="tituloh4 grande rojo circular">elemento a modificar</h4>
*EN JS*
let valor = titulo.classList.item(1);
document.write(valor); */

/*nombreDeClase = "grande";
let valor = titulo.classList.contains(nombreDeClase);
//document.write(valor); se usa para que aparezca el valor true/false
if (valor){
    document.write(` <br> la clase ${nombreDeClase} existe`);
    titulo.classList.remove(nombreDeClase)
}else {
    document.write(` <br> la clase ${nombreDeClase} NO existe`);
    titulo.classList.add(nombreDeClase)
}*/

//ESTE CODIGO SE USÓ PARA AGREGAR/QUITAR "grande" a la clase de h4 en esa clase se quita y añade
/*
nombreDeClase = "grande";
let valor = titulo.classList.contains(nombreDeClase);

if (valor){
    titulo.classList.remove(nombreDeClase)
}else {
    titulo.classList.add(nombreDeClase)
}*/

/*EXISTE OTRO MÉTODO, TOGGLE xD las bromas de Dalto ptm xD
nombreDeClase = "grande";
let valor = titulo.classList.contains(nombreDeClase);
titulo.classList.toggle(nombreDeClase);*/

//USO DE REPLACE
titulo.classList.replace("grande","aHuevoFunciona")


/*

titulo.classList.add("grande");
titulo.classList.add("grande");
titulo.classList.add("grande");
titulo.classList.add("grande");

*/
