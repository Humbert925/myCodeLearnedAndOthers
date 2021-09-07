const obtenerInfo = (materia)=>{
    materias = {
        fisica:["Marcelo Lugo","pedro","hugo","cofla","ana" ],
        programacion:["J. Iglesias","pedro","hugo","ana"],
        logica:["Nadia Perez","pedro","hugo","cofla","ana", "juan"],
        quimica:["Martin Panting","pedro","hugo","cofla","ana","nat"],
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        return materias; 
    }
}

const mostrarInfo = (materia)=>{
    let informacion =obtenerInfo(materia);

    if (informacion !== false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift()
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red")>${profesor}</b> <br>
    Los alumnos presentes son: <b style="color:blue"> ${alumnos}</b> <br><br>
    `);
}
}
//se hace algo parecido a un array asociativo, en js eso no existe
const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInfo();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " +info + " " );
        }
    }
    return `<b style = 'color:blue'>${alumno} </b> 
    <b> está en: ${cantidadTotal} clases </b> <br><br> 
    El/La alumn@ está cursando las clases: <b style = 'color:green'> ${clasesPresentes} </b> <br><br> 
    `;
}

mostrarInfo("fisica");
mostrarInfo("quimica");
mostrarInfo("programacion");
mostrarInfo("logica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("hugo"));
