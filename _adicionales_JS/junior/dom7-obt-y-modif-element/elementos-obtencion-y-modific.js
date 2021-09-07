const titulo = document.querySelector(".titulo");
let resultado0 = titulo.textContent;
let resultado1 = titulo.innerHTML;
let resultado2 = titulo.outerHTML;

alert(resultado0)
alert(resultado1)
alert(resultado2)

/*
*Dentro de la variable local resultado = titulo
.textContent: se muestra el texto que contiene. 
.innerHTML: muestra el código HTML. 
.outerHTML: regresa el contenido de las etiquetas


*/