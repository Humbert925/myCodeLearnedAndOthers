
const tituloh3 = document.querySelector(".tituloh3"); 
const tituloh4 = document.querySelector(".tituloh4"); 

/*el valor de este atributo de content editable es true/false
tituloh3.setAttribute("contentEditable", "true");*/

/*
    Direccion del documento, tiene 3 valores. 1: "ltr", 2: "rtl" y 3: 
    otro que no recuerva :v LOL
    Sólo modifica la posición del documento, no el orden de los caracteres
tituloh3.setAttribute("dir", "rtl");
    */

/*Este atributo debe tener valor true/false si no lo tiene, no oculta el 
contenido de la etiqueta. Si el atributo está desde el html y quieres quitarlo,
sólo usas removeAttribute ("hidden") o puedes quitarlo desde consola
tituloh3.setAttribute("hidden", "true");*/

/*Este valor funciona con la tecla tab "flechitas arriba de Mayus" y ordena la 
forma en que se interactua con los elementos de la misma etiqueta. 
Por eso se les asigna un valor numerico
tituloh3.setAttribute("tabindex", "0")*/

tituloh4.setAttribute("title", "abuelita de Batman, si funciona !!!")
