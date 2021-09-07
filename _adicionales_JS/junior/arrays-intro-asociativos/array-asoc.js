let pc1 ={
    nombre: "BetoPC",
    procesador:"Intel core x",
    ram:"8 GB",
    espacio:"500 MB",
};
/*let pc2= ["BetoPC", "Intel core x","8 GB","500 MB"];
document.write(pc1["nombre"]);
esta es una forma de hacer ver los datos en la pantalla, 
tambien se pueden obtener de la siguiente forma
*/

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
             el procesador es: <b>${procesador}</b> <br>
             la memoria ram es: <b>${ram}</b> <br>
             el espacio disponible es: <b>${espacio}</b> 
`
document.write(frase);