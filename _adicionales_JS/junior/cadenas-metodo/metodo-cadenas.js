let cadena = "      piedra    sol    agua   ";
//cancelado para metodos que transforman cadenas, solo se usa 1 cadena
let cadena2 = "a";

//Métodos que se usan para buscar cadenas y devolver valores
//*Escritura de los diferentes métodos de cadena*
let resultado0 = cadena.concat(cadena2);
let resultado1 = cadena.startsWith(cadena2);
let resultado2 = cadena.endsWith(cadena2);
let resultado3 = cadena.includes(cadena2);
let resultado4 = cadena.indexOf(cadena2);
//cuando no halla una posición regresa (-1) el método de indexOf
let resultado5 = cadena.lastIndexOf(cadena2);

//Métodos que aun son no oficiales (para rellenar cadenas)
let resultado6 = cadena.padStart(40, "eresChingon <3 ");
let resultado7 = cadena.padEnd(40, "eresChingon <3 ");
let resultado8 = cadena.repeat(10);

//Métodos que se usan para transformar cadenas

let resultado9 = cadena.split(",");
//document.write(resultado9[0]); así se imprime, dentro de las llaves se pone un numero
let resultado10 = cadena.substring(0,8);
let resultado11 = cadena.toLowerCase();
let resultado12 = cadena.toUpperCase(); 
let resultado13 = cadena.toString(); 
let resultado14 = cadena.trim(); 
let resultado15 = cadena.trimEnd(); 
let resultado16 = cadena.trimStart(); 

//Otro método que sirve para
let resultado17 = cadena.valueOf(); 

//*Abajo sólo cambio el numero de resultado para ver en el documento*

document.write(resultado1);

