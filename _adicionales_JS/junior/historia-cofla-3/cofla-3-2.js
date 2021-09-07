class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso; 
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true ){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar (){
        if(this.instalada == false){
            this.instalada = true;
            //if (this.instalada == true){
                alert("app instalada correctamente");
            } //else{
                //alert("ha ocurrido un error");
            //}
            
        }
        desinstalar (){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente")
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        <br>`
    }
    }

//se crea un objeto
app1 = new App ("16,000","5 estrellas","900 Mb");
app2 = new App ("1,000","4 estrellas","400 Mb");
app3 = new App ("6,000","4.5 estrellas","100 Mb");
app4 = new App ("23,000","4.8 estrellas","1 Gb");
app5 = new App ("900","5 estrellas","250 Mb");
app6 = new App ("17","3.7 estrellas","522 Mb");
app7 = new App ("42,981","2.9 estrellas","723 Mb");

//se validan los métodos
/*
app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();*/

document.write(`
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
`)
