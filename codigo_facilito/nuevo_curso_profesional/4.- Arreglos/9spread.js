//cualquier objeto de js que puede ser separado en elementos es un objeto iterable

//spread syntax(...)

let arreglo = [1,2,3]

console.log(arreglo)
console.log(...arreglo)

//Rest parameters (...)

function promedio(nombre,...calificaciones){
    console.log(nombre,calificaciones)
}

promedio ("Uriel,1,12,3,4,22")