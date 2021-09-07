let nombre = "bet";
let apellido = "morale";

if(nombre == "beto") {
    alert("tu nombre es " + nombre);
}
//cuando la primera condicion, no se cumple. Se ejecula la siguiente:
else if (apellido == "morales") {
    alert("tu apellido es "+ apellido );
}
//cuando las condiciones previas no se cumplen. Se ejecuta else
else {
    alert("ahora te llamarás Gloria, lo tienes bien merecido xD");
}
//else se ejecuta cuando if y else if no se ejecutan

/*
*el método de hacer una declaración de condicional es como sigue:*
if(condición){
    bloque que se ejecutará si la condición es verdadera
}
else if (otraCondición){
    otro bloque que se ejecuta si la primera condicion es falsa
}

*/