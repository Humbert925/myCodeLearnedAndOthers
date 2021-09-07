//PROBLEMA 1
let free = false;
const validarCliente = (time)=>{
    let edad = prompt ("¿Cuál es tu edad?");
    if (edad > 17) {
        if (time >= 2 && time < 7 && free == false){
            alert ("pudes pasar gratis por ser la primera persona después de las 2 A.M.");
            free = true; 
        } else {
            alert (`son las ${time}:00 HRS puedes pasar, paga tu entrada`);
        }
    } else{
        alert ("eres menor de edad, NO vas a pasar :c ");
    }
}

//PROBLEMA 2
/*
validarCliente(2);
validarCliente(2.4);
validarCliente(3);*/
/*
let cantidad = prompt("¿cuántos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarLista = (nombre,p)=> {
    let presencia = prompt (nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}
for (i = 0; i < 31; i++){
    for (alumno in alumnosTotales){
        tomarLista(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales [alumno][0]}: <br>
    _________Presentes: ${alumnosTotales[alumno][1]} <br>
    _________Ausentes: ${30 - parseInt(alumnosTotales[alumno][1])}
    `;
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style 'color:red'> REPROBADO POR FALTAS </b>";
    } else {
        resultado+= "<br><br>"
    } document.write(resultado);
}*/

//PROBLEMA 3
//Se declaran las funciones flecha
/*
const sumar = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿qué operación quieres hacer?");
operacion = prompt("1: suma, 2: resta, 3:division, 4: multiplicación");
if (operacion == 1 ){
    let numero1 = prompt("primer numero ");
    let numero2 = prompt("segundo número ");
    resultado = sumar (numero1, numero2);
    alert(`tu resultado es: ${resultado}`);
}
else if (operacion == 2 ){
    let numero1 = prompt("primer numero ");
    let numero2 = prompt("segundo número ");
    resultado = restar (numero1, numero2);
    alert(`tu resultado es: ${resultado}`);
}
else if (operacion == 3 ){
    let numero1 = prompt("primer numero ");
    let numero2 = prompt("segundo número ");
    resultado = dividir (numero1, numero2);
    alert(`tu resultado es: ${resultado}`);
}
else if (operacion == 4 ){
    let numero1 = prompt("primer numero ");
    let numero2 = prompt("segundo número ");
    resultado = multiplicar (numero1, numero2);
    alert(`tu resultado es: ${resultado}`);
}
else {
    alert("no se ha encontrado la operación, LEE bien. No mms");
}*/