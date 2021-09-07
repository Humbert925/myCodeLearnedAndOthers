const contenedor = document.querySelector (".contenedor");
/*
const primerHijo = contenedor.firstChild; 
const ultimoHijo = contenedor.lastChild;
const primerElementoHijo = contenedor.firstElementChild; 
const ultimoElementoHijo = contenedor.lastElementChild;
const hijosNodo = contenedor.childNodes;*/
/*Se puede recorrer como un hijo, pero no usar funciones 
que llamen al objeto como "array/arreglo/matriz"
hijosNodo.forEach(hijo => console.log(hijo));

*/
const hijos =contenedor.children;
//Con forEach no se puede recorrer, existe otro comando
//se usa in (de indice) u of dentro de la condicional
for (hijo of hijos){
    console.log(hijo)
}

/*
console.log(primerHijo)
console.log(ultimoHijo)
console.log(primerElementoHijo)
console.log(ultimoElementoHijo)
console.log(hijosNodo)
*/
console.log(hijos)
