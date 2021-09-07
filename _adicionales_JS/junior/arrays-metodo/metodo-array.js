let nombres =["Ana"," Emi"," Santi"," Sam"," Xime"," Nat"]; 

//Uso para comparación
//Para usar filter se comento la linea de abajo
document.write("Array original: <b>" + nombres + "</b><br>");

//DECLARACIÓN DE MÉTODOS DE TRANSFORMADORES 
// let resultado0 = nombres.pop();
// let resultado1 = nombres.shift();
//let resultado2 = nombres.push("Beto");
//let resultado3 = nombres.reverse();
//let resultado4 = nombres.unshift("agregaAlinicio");
//let resultado5 = nombres.sort();
//let resultado6 = nombres.splice(1,3,"David","César","Machi");

//DECLARACIÓN DE MÉTODOS ACCESORES
//let resultado7 = nombres.join("-");
//let resultado8 = nombres.slice(0,-1);

//DE REPETICIÓN
//opción 1 
//nombres.filter(nombres=> document.write(nombres + "<br>"));
//opción 2
let resultado9 = nombres.filter(nombres => nombres.length>4);
//let resultado10 = nombres.forEach();

document.write("Elemento removido: <b style='color:red'>" + resultado9 + "</b><br>");
document.write("Resultado: <b>" + nombres + "</b><br>")

