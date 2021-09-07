/*Concatenar: combinar strings*/ 
var saludo = "¡Hola Beto! ";
var pregunta =" ¿Cómo estás?";
var num1 ="5";
var num2 ="6";
//var frase = saludo + pregunta + "" + num1 + num2

frase1 = "Beto M, ";
/*FORMAS DE MOSTRAR LA INFO EN PANTALLA*/
//frase0 = "Soy "+ frase1 + "y estoy caminando";
frase0 = `Soy ${frase1}  y estoy caminando`;
//frase = num1.concat(saludo)
document.write(frase0)

//DEL USO DE BACKSTICK PUEDE MOSTRAR LO SIGUIENTE:
etiquetas = `<div>
<h1>Titulo</h1> 
<h2>subtitulo</h2>
</div>`;
document.write(etiquetas);

//COMILLAS SIMPLES Y DOBLES
nombre = "Beto Morales";
frase = "Mi nombre es  'Beto' y soy crack";
document.write(frase);


/*
Si pones "" previo a la variable de un número, forzas a que se vuelva texto. 
Tambien puedes usar las comillas dentro de la línea de las variables. 

Se usa variable1.concat(variable2), pero sólo pueden ser strings. 
Porque es un método de cadena, si usas numeros que no se hayan 
declarado como variables, no funcionará. 


*/