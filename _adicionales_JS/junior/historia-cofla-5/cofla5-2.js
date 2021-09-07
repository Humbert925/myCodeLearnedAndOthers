let tp = "100 min hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let housework = "30 min de chacha time";
let descanso = "10 minutos de descanso";

console.log ("TAREAS");

for (var i=0; i<14; i++){
    if (i==0){
        console.group("semana 1")
    }

console.groupCollapsed("dia " + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(housework);
console.groupEnd();
if(i==6){
        console.groupEnd();
        console.groupCollapsed("semana 2");
    }
}

console.groupEnd();
console.groupEnd();