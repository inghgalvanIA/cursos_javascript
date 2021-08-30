/*
podemos mandar un argumeno como referencia
*/
//funcionamiento por valor
let edad = 20;

function modificar(edad){
    edad = 25;
    console.log("Dentro de la funcion: "+ edad)
}

console.log(edad)
modificar(edad)

//por referencia

let edades = [20]

function modificar_ref(edades){
    edades[0] = 25;
    console.log("Dentro de la funcion: "+ edades)
}

console.log(edades)
modificar_ref(edades)
console.log(edades)