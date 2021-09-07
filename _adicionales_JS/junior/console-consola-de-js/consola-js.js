//Ejemplos de comandos de consola
console.assert(5<3);

/*limpiar consola
console.clear();*/

console.error("¿qué vrgs hiciste ? :v ")
//mensaje de 
console.info("Goei muy bien tu chamba, pero eso ya no se usa xD");
//mensaje de depuracion
console.log("mensaje en consola por console log :) ");
//tabla debe ser un array o un objeto
console.table([4,5,6,,2,1,2,30]);
//advertencia, todo esta bien pero se puede presentar la advertencia
console.warn("vas bien, pero cuidado con rendirse eh ;) ");
//Muestra los datos, pero como un arreglo con una pestaña que los compacta o no
console.dir([4,5,6,,2,1,2,30]);
//funciones de conteo, sirve más para saber como funciona. es una herramienta de desarrollo
console.count()
console.count()
console.countReset()
console.count()
//agrupacion
console.group()
console.log("hola");
console.log("hola");
console.group()
console.log("otro grupo al interior")
console.group()
console.log("un grupo más")
//para agregar información un grupo ""superior/anterior"":
console.groupEnd()
console.log("regresa info a otro grupo al interior :) ")
//es un comando para que la informacion no se muestre por default. 
console.groupCollapsed()
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.groupEnd()
//Temporización 
//sólo dice cuanto tiempo paso desde que se ejecuto un código
//se crea
console.time()
//preguntamos cuanto tiempo tarda la ejecucion
console.timeLog()
//aca termina la ejecucion y el tiempo que se tardo en llegar a la ejecución. 
console.timeEnd()
//Cambiar colores y estilo a la consola

console.log("%cHumberto eres la vrg !", "color:blue; background: yellow; padding: 20px;border: solid black 5px")
