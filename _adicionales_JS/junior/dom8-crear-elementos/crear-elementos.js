const contenedor =document.querySelector(".contenedor");

//Se crean elementos en mayúscula
//document.write(item)
//const textDelItem = document.createTextNode("Este es un item de la lista")
//console.log(textDelItem)
//¿Se puede un nodo dentro de otro nodo?
/*item.innerHTML = textDelItem; otra opción es:
item.innerHTML = "esta es otra forma de un item de la lista que modifica el valor o crea un text node";
pero OJO, eso no es un objeto
console.log(item)*/
/*
Dice "object text", como es un objeto texto. Por eso si quieres insertar
un objeto dentro, es más recomendable usar el appenChild
*/
//item.appendChild(textDelItem);

//contenedor.appendChild(item);
//aquí se ve en el doc HTML una ul con viñeta. 
//console.log(item);
//aparece en consola dentro de las etiquetas <li>
/*Cundo quieres agregar muchos elementos se hace lo siguiente*/
const fragmento = document.createDocumentFragment();
for (i = 0; i < 20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "Este es un bucle que modifica items de la lista";
    fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);
console.log(fragmento);