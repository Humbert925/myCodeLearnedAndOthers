class Animal {
    constructor(especie, edad, color){
    this.especie = especie;
    this.edad= edad;
    this.color = color;
    this.info =`Soy ${this.especie}, tengo ${this.edad} años
    y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        //this.raza = raza; se uso para el método static
        this.raza = null;
    }

    /*modificarRaza (){
        this.raza = "husky";
    }*/
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
    /*static ladrar(){
        alert("¡woaw!");
    }*/
}
//NOTA: Los objetos se definen con const
const perro = new Perro("perro",5,"negro", "doberman");
const gato = new Animal("gato",2,"blanco");
const pajaro = new Animal("pajaro",3,"amarillo");

perro.setRaza = "Afgano";

document.write(perro.getRaza)
