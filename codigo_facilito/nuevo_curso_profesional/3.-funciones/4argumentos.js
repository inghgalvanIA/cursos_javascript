/*
para recibir informacion en una funcion

utilizamos los argumentos

parametro no tiene un tipo definido
puede recibir cualquier tipod e dato
se puede mandar mas o menos argumentos de los mencionados 

*/

//function nombre_funcion(parmetro);
function cuadrado(numero){
return numero * numero;
}

//mandar llamar a la funcion (argumento)
cuadrado(2)

//podemos obtener multiples argumentos para un solo parametro

function sumaTodos(){
console.log(arguments)
let suma = 0;
for(let i = 0; i < arguments.length;i++ ){
    (suma += arguments[i])
}
console.log(suma)
}

sumaTodos(1,2,3,4);