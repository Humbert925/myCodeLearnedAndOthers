class elemento {
    constructor (nombre,simbolo, pm, nox){
        this.nombre = nombre;
        this.simbolo = simbolo;
        this.pm = pm;
        this.nox = nox;
        this.info = `Soy ${this.nombre}, 
        mi símbolo químico es ${this.simbolo},
        mi peso molecular es ${this.pm} y
        mi estado de oxidación más común es ${this.nox}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
    reaccion(){
        if (this.nombre == "hidrogeno"){
            document.write("El hidrógeno forma enlaces covalentes <br>");
        } else {
                document.write("No forma enlaces covalentes, ya que es " + this.nombre + "<br>");
            }
        }
    }

class propiedades extends elemento {
    constructor(nombre, simbolo, pm, nox, edoFis){
        super(nombre, simbolo,pm, nox);
        this.edoFis = edoFis;
    }
    verProp(){
        alert("mira las propiedades");
    }/*else {
        alert("vuelve más tarde");
    }*/}


let hidrogeno =new propiedades ("hidrogeno", "H", 1 ,1,"gaseoso");
let oxigeno =new elemento ("oxígeno", "O", 16 ,-2, "gaseoso");
let azufre =new elemento ("azufre", "S", 32, "4,6 ", "sólido");

hidrogeno.verInfo();
oxigeno.verInfo();
azufre.verInfo();

hidrogeno.reaccion();
oxigeno.reaccion();
azufre.reaccion();

hidrogeno.verProp();
oxigeno.verProp();
azufre.verProp();

/*
CONSIDERACIÓNES IMPORTANTES:
1. No puedes tener un OBJETO CON el MISMO nombre que la CLASE
2. 
*/