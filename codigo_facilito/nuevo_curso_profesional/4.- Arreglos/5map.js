/* 
map

generar un nuevo arreglo despues ejecutar de una funcion de modificacion del arrelo original

numeros.map(function(){})
*/

let numeros = [2,3,4,56,6];

let cuadrados = numeros.map(function(numero){
    return numero * numero;
});

console.log(cuadrados)
