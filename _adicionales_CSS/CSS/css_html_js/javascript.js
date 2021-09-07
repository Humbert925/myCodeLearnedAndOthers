//prueba de conexión
//alert("Hola");
//las variables se declaran con "let"

/*Declaración de VARIABLES*/
let nombre ="Humbert";
let edad =20;

const COLOR_ROJO="#FF0000"
//alert("Hola: " + nombre);

let resultado = "Bienvenido: " + nombre;
//alert(resultado);

/*console.log(nombre);
nombre = "Humberto Morales";
console.log(nombre);*/

/*ASOCIACIÓN DE ELEMENTOS USANDO .getElementById*/
const contenido = document.getElementById("contenido");
//contenido.innerHTML= "Hola fregon";
contenido.innerHTML= "<h2>"+ nombre+"</h2>";
contenido.innerHTML+="<h3>"+edad+"</h3>";

/* Tambien se pueden usar las comillas simples 
y el signo de $ cuando se declaran variables E.G.
contenido.innerHTML =`<h2>${nombre}</h2>`;
contenido.innerHTML +=`<h3>${edad}</h3>`;
*/

//CONDICIONALES "IF"
//let condition= 1>4;
/*if(edad >= 18){
    alert("puedes entrar a la corbata :) ");
}else if(edad >13){
    alert("Puedes entrar con un adulto :v ");
}
else{
    alert("SORRY, NO ENTRAS xD");
}*/
//BUCLES "FOR"
//se usan cuanco hay cosas iguales. Operaciones, consultas, imprimir resultados
/*for(let i = 0; i<10; i++){
    console.log(i);
}*/

//FUNCIONES
function addContent(newContent){
    //imprime en la pantalla del usuario
    contenido.innerHTML =newContent;
    //imprime por consola
    console.log(newContent);
}
addContent("Hola vatoProgramador");

let array =[23,45,2,65];
console.log(array);
/*si usas [n], n representa la posición que quieres. inicia en 0
si usas: variable.length se imprimira la cantidad de 
datos que tienes es un numero entero*/