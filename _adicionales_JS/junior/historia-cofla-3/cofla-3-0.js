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

celular1 = new celular ("rojo", "150 g", "5'", "HD", "1GB");
celular2 = new celular ("negro", "155 g", "5.4'", "full HD", "2GB");
celular3 = new celular ("blanco", "146 g", "5.9'", "full HD", "2GB");

/*
celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();*/

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`);
