class celular{
    constructor(color, peso, tamaño, rdc, ram) {
        this.color = color; 
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionCamara = rdc;
        this.ram = ram;
        this.encendido = false; 
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true ;
        } else {
            alert("celular apagado");
            this.encendido = false; 
        }
    }
    reiniciar (){
        if (this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
        }
    }
    tomarFoto (){
            alert(`foto tomada con resolución de : ${this.resolucionCamara}`);
    }
    grabarVideo (){
        if (this.encendido == true){
            alert(`video grabado con una resolución de: ${this.resolucionCamara}`);
        }
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Tamaño: <b>${this.tamaño}</b> <br>
        Resolución de cámara: <b>${this.resolucionCamara}</b> <br>
        Resolución de video: <b>${this.resolucionCamara}</b> <br>
        Memoria RAM: <b>${this.ram}</b> <br>
        `;
    }
}

class celularAltaGama extends celular {
    constructor(color, peso, tamaño, rdc, ram,rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionCamaraExtra = rdce; 
    }
    grabarVideoLento(){
        alert("estás grabando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `
        Resolución de cámara frontal: <b>${this.resolucionCamaraExtra}</b> <br>
        `;
    }
}

celular1 = new celularAltaGama ("Rojo","130 g","5.2'","4K","3 GB","full HD","HD");
celular2 = new celularAltaGama ("Negro","142 g ","6'","4K","4 GB","HD","HD");

document.write(`
    ${celular1.infoAltaGama()} <br>
    ${celular2.infoAltaGama()} <br>
`);

