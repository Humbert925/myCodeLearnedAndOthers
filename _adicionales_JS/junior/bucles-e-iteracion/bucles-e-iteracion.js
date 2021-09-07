
let array1 = ["neto","vic","nacho"];
let array2 =["ana","emi","sidd",array1, "mar"];

forUno:
for(let array in array2){
    if (array == 3){
        
        for (let array of array1){
            document.write(array+ "<br>");
            break forUno;
        }
    }else {
        document.write(array2[array]+ "<br>");
    }
}

/*
*USO DEL CICLO WHILE -alias "¿ya llegamos?"-*
while NUNCA se ejecuta cuando la condición es falsa

let numPsumar = 0;
while (numPsumar < 6){
    numPsumar++;
    document.write(numPsumar + "<br>");
}
Se ejecuta la funcion mientas que la variable 
numPsumar sea menor que 6. Por lo que, cuando 
se llega al resultado de 5 que aun es menor a 6
al realizar la suma, se ejecuta y se obtiene 6.

*USO DE BREAK*
Break hace que el bucle finalize, es útil cuando haces
alguna búsqueda en una base de datos y cuando obtienes el 
dato que solicitas, se detiene. 

let numPsumar = 0;
while (numPsumar < 7){
    numPsumar++;
    document.write(numPsumar + "<br>");
    if (numPsumar == 3){
        break;
    }
}
document.write(" " + "fin")
*/

/*
*USO DEL CICLO DO WHILE -alias "primero disparo después pregunto"-*
Primero se hace y luego se pregunta. 
Mientras que do-while, se ejecuta aunque sea falsa la condición
let numPsumar = 0;
do {
    document.write(numPsumar + "<br>");
    numPsumar++;
    //se cambió el orden de la variable para obtener el cero
}
while (numPsumar <= 6)
*/ 

/*
*USO DEL CICLO FOR*
Es un bucle determinado, es decir, es finito. A los indeterminados, 
también se les conoce como infinitos. E.G. "Hola Dormamu". 
"For" esta compuesto de 3 partes: 
1. Declaracion de variables e inicialización de variables
2. Condición
3. Iteración de variables

Ejemplo de forma general
for (def. de la variable; def. condición; def. increm/aument){
    impresión en pantalla con alert o document.write(var [+"<br>"])
}

Ejemplo de aumento
for (let i = 0; i<5; i++){
    document.write(i + "<br>");
}
Ejemplo de decremento
for (let i = 6; i>=0; i--){
    document.write(i + "<br>");
}

Ejemplo cuando defines una variable por "fuera"
let i;
for (i = 6; i>=0; i--){
    document.write(i + "<br>");
}

Otra forma de ejecutar por "fuera"
let i=6;
for (i ; i>=0; i--){
    document.write(i + "<br>");
}

*USO DE CONTINUE*
for (let i=0 ; i<6; i++){
    if(i==3){
        continue;
    }
    document.write(i + "<br>");
}
//lo que hace es omitir un dato y continuar, tambien sirve con strings.

**USO DE FOR IN Y FOR OF**
let animales =["gato","oso","loro","pez"];
//in devuelve la posición (o índice) de los elementos
for(animal in animales){
    document.write(animal + "<br>");
}

    document.write("<br>");
    document.write("<br>");

//of devuelve los elementos
for (animal of animales){
    document.write(animal + "<br>");
}
*/

/*
USO DE LABEL

Sirve para asociar bucles, con excepción de "for each"
a un nombre para correr el bucle cuando lo queramos. 


//de esta forma se incluyen todos los nombres porque 
//dentro del 2o for pide parar
let array1 = ["neto","vic","nacho"];
let array2 =["ana","emi","sidd",array1, "mar"];

for(let array in array2){
    if (array == 3){
        
        for (let array of array1){
            document.write(array + "<br>");
            break;
        }
    }else {
        document.write(array2[array]+ "<br>");
    }
}

// Acá exhibe los nombres de array2 poque se detiene
//en el primer ciclo for

let array1 = ["neto","vic","nacho"];
let array2 =["ana","emi","sidd",array1, "mar"];

for(let array in array2){
    if (array == 3){
        break;
        for (let array of array1){
            document.write(array + "<br>");
            
        }
    }else {
        document.write(array2[array]+ "<br>");
    }
}

// forUno contiene al otro ciclo, sólo muestra array2 sin "mar"
//
let array1 = ["neto","vic","nacho"];
let array2 =["ana","emi","sidd",array1, "mar"];

forUno:
for(let array in array2){
    if (array == 3){
        
        for (let array of array1){
            document.write(array + "<br>");
            break forUno;
        }
    }else {
        document.write(array2[array]+ "<br>");
    }
}

*/

//REVISAR OTRA VEZ DESDE 3:00:00 https://www.youtube.com/watch?v=z95mZVUcJ-E