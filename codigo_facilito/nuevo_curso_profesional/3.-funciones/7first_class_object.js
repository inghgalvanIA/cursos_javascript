/*
un tipo de dato es asignado a una variable y retornado o enviado como argumento 
es un first class citizen

Debe ser posible retornarlo
debe se rposible asignarlo a una variable
debe ser posible enviarlo como argumebnto

como enviar funciones como argumentos 
*/

function executor(funcion) {
 funcion();  
}

function decirHola(){
    console.log("Hola");
}

executor(decirHola);