let materias = {
        fisica:["Marcelo Lugo","pedro","hugo","cofla","ana" ],
        programacion:["Juan Iglesias","pedro","hugo","ana"],
        logica:["Nadia Perez","pedro","hugo","cofla","ana", "juan"],
        quimica:["Martin Panting","pedro","hugo","cofla","ana","nat"]
    }
//ctrl+f selecciona las variables con el mismo nombre

const inscribir = (alumno, materia)=>{
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`lo siento <b style='color:red'>${alumno}</b>, las clases de:${materia}
        ya están llenas <br>`);
    }else {
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas, 
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if (materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        }
        else if (materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a 
        ${materia} correctamente. <br><br>`);
    }
}

document.write(materias['fisica'] + "<br>") 

inscribir ("a", "fisica");
inscribir ("b", "fisica");
inscribir ("c", "fisica");
inscribir ("d", "fisica");
inscribir ("e", "fisica");
inscribir ("f", "fisica");
inscribir ("g", "fisica");
inscribir ("h", "fisica");
inscribir ("i", "fisica");
inscribir ("j", "fisica");
inscribir ("11", "fisica");
inscribir ("12", "fisica");
inscribir ("13", "fisica");
inscribir ("14", "fisica");
inscribir ("15", "fisica");
inscribir ("16", "fisica");
inscribir ("17", "fisica");
inscribir ("18", "fisica");
inscribir ("19", "fisica");
inscribir ("20", "fisica");
inscribir ("21", "fisica");
inscribir ("22", "fisica");
inscribir ("pedrito", "fisica");


//buscar rechazo de inscripción

document.write("<br>" + materias['fisica'])
