//Problema 1 historia de Cofla
let dineroRob = prompt("¿cuánto dinero tienes Roberto?");
let dineroPed = prompt("¿cuánto dinero tienes Pedro?");
let dineroCof = prompt("¿cuánto dinero tienes Cofla?");
//let dineroCof = parseInt(dineroCof);

if (dineroRob >= 0.6 && dineroRob <1){
    alert("Roberto, comprar el helado de agua");
}
else if (dineroRob >= 1 && dineroRob < 1.6){
    alert("Roberto, comprar el helado de crema");
}
else if (dineroRob >= 1.6 && dineroRob < 1.7){
    alert("Roberto, comprar el helado heladix");
}
else if (dineroRob >= 1.7 && dineroRob < 1.8){
    alert("Roberto, comprar el helado heladovich");
}
else if (dineroRob >= 1.8 && dineroRob < 2.9){
    alert("Roberto, comprar el helado helardo");
}
else if (dineroRob >=2.9) {
    alert("Roberto, comprar helado con confites o el pote de 1/4 kg ");
} 
else{
    alert("Lo siento Roberto, pobre de mierda, no te alcanza para ningun helado");
}

if (dineroPed >= 0.6 && dineroPed <1){
    alert("Pedro, comprar el helado de agua");
}
else if (dineroPed >= 1 && dineroPed < 1.6){
    alert("Pedro, comprar el helado de crema");
}
else if (dineroPed >= 1.6 && dineroPed < 1.7){
    alert("Pedro, comprar el helado heladix");
}
else if (dineroPed>= 1.7 && dineroPed < 1.8){
    alert("Pedro, comprar el helado heladovich");
}
else if (dineroPed >= 1.8 && dineroPed < 2.9){
    alert("Pedro, comprar el helado helardo");
}
else if (dineroPed >=2.9) {
    alert("Pedro, comprar helado con confites o el pote de 1/4 kg ");
} 
else{
    alert("Lo siento Pedro, pobre de mierda, no te alcanza para ningun helado");
}

if (dineroCof >= 0.6 && dineroCof <1){
    alert("Cofla, comprar el helado de agua");
    alert("Cofla, te sobran " + (dineroCof -0.6));
}
else if (dineroCof >= 1 && dineroCof < 1.6){
    alert("Cofla, comprar el helado de crema");
    alert("Cofla, te sobran " + (dineroCof -1));
}
else if (dineroCof >= 1.6 && dineroCof < 1.7){
    alert("Cofla, comprar el helado heladix");
    alert("Cofla, te sobran " + (dineroCof -1.6));
}
else if (dineroCof >= 1.7 && dineroCof < 1.8){
    alert("Cofla, comprar el helado heladovich");
    alert("Cofla, te sobran " + (dineroCof -1.7));
}
else if (dineroCof >= 1.8 && dineroCof < 2.9){
    alert("Cofla, comprar el helado helardo");
    alert("Cofla, te sobran " + (dineroCof -1.8));
}
else if (dineroCof >=2.9) {
    alert("Cofla, comprar helado con confites o el pote de 1/4 kg ");
    alert("Cofla, te sobran " + (dineroCof -2.9));
} 
else{
    alert("Lo siento Cofla, pobre de mierda, no te alcanza para ningun helado");
}
/*El ejercicio anterior desarrolla la lógica, pero se puede resolver así:

"use strict";

const definirCompra = (n)=>{
    let din =prompt (`Dinero de ${n}`);
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
    if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
    if (din >= 2.9) return (`${n}: helado de confites o pote de 1/4 de kg`);
    else return (`${n}: No te alcanza para ningun helado, pobre de mierda`);
}
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Cofla"));
*/