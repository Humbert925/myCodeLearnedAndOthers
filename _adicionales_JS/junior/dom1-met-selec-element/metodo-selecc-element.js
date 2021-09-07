//ejemplo de como pasaria sin el metodo de seleccion
//let parrafo = "@Humbert925";
//document.write(parrafo)

//Forma A de seleccionar un elemento
//parrafo = document.getElementById("parrafo");
//document.write(parrafo);

//Forma B de seleccionar elementos-colecciones-
//De esta manera se seleccionan objetos, no arreglos (arrays)
//ejemplo de como seleccionar elementos con el mismo nombre document.write(parrafo['n']);
parrafo =document.getElementsByTagName("p");
document.write(parrafo);

//Forma C de seleccionar un elemento. para Id se usa "#" y para class "."
parrafo =document.querySelector("#parrafo");
document.write(parrafo);

//Forma D de seleccionar MediaElementAudioSourceNode. Se genera un NodeList
//NodeList = lista de nodos. Es la lista de los nodos con esos elementos

parrafo =document.querySelectorAll(".parrafoClass");
document.write(parrafo);

