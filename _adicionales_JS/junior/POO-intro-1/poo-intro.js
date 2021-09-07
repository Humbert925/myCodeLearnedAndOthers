class animal {
    constructor(especie, edad, color){
//this se usa para señalar la propiedad de un objeto
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    }
    /*AQUI ES UN MÉTODO
const saludar = ()=> {
    alert("saludar");
}*/
    /*no se usa this.verInfo porque ya esta determinado que es un método
    y sólo se usa el this cuando usas el constructor de la funcion
    
    Usando const, var o let, tampoco funciona porque las funciones que son 
    creadas dentro no pueden ser usadas las funciones flecha
    
    Por eso sólo se escribe lo siguiente:
    */
    verInfo(){
        document.write(this.info + "<br>")
    }
}
/*AQUI ES FUNCIÓN
const saludar = ()=> {
    alert("saludar");
}*/


const perro = new animal ("perro", 3, "dorado");
const gato = new animal ("gato", 5, "negro");
const oso = new animal ("oso polar", 6, "blanco");

/*
document.write(perro.info + "<br>");
document.write(gato.info + "<br>");
document.write(oso.info + "<br>");*/

perro.verInfo();
gato.verInfo();
oso.verInfo();

//USO DE MÉTODOS, funcion dentro de la clase= método. 
//Funcion afuera de la clase es función :v  



/*
por consola
console.log(perro)
*/
