//declaración de la función
/*function saludar() {
    resp = prompt ("¡Hola Beto!, ¿cómo va tu día?");
    if (resp == "bien") {
        alert("me alegro")
    } else {
        alert("que pena")
}
}*/
//aquí se ejecuta la función
//saludar();

/* se declaró 2 veces la funció para probar el código
saludar();*/

//CREAR FUNCIONES CON VARIABLES 
//es un esquema que puede confundir, no es muy sugerido.
/*saludar = function() {
    resp = prompt ("¡Hola Beto!, ¿cómo va tu día?");
    if (resp == "bien") {
        alert("me alegro")
    } else {
        alert("que pena")
}
}
saludar()*/

//USO DE RETURN
//return finaliza la funcion, lo que sigue no se ejecuta
/*function saludar() {
    alert("hola");
    return "la función se ejecutó correctamente";
    } 
let saludo = saludar();
document.write(saludo);*/

//USO DE PARÁMETROS
//Los parámetros se definen dentro de los parentesis de la funcion.

function suma(num1, num2){
    let res =num1 + num2;
    document.write(res);
    document.write("<br>");
}
//parámetros definidos dentro de la funcion
suma(1992,1993);

//OTRO EJEMPLO DE FUNCIONES CON PARÁMETROS
/*function saludar (nombre){
    let frase = `¡Hola ${nombre}!, ¿cómo estás? `;
    document.write(frase)
//se recalcó el uso de let para definir variables locales.
}
saludar ("Ana");*/

/*const saludar = function(nombre){
    let frase = `¡Hola ${nombre}!, ¿cómo estás?`;
    document.write(frase)
}
saludar("ana");*/

//FUNCIONES FLECHA
/* 
Las funciones flecha tienen varios beneficios, entre otros:
1. no necesita uso de paréntesis para un sólo parámetro, 
2. tambien puedes omitir las llaves 

*/
/*const saludar = (nombre)=>{
    let frase = `¡Hola ${nombre}!, ¿cómo estás?`;
    document.write(frase)
}
saludar("Santi");*/
//Otra forma de lograr lo mismo
const saludar = (nombre)=>{
    document.write("¡Hola, ¿cómo estás?" + nombre)
}
saludar("Emi");
/**/