/*  reduce nos permite reduccion para un arreglo a un solo valor*/

let numero = [1,2,3,4,5];

let suma = numero.reduce(function(acumulador,elemento){
console.log(acumulador);
return acumulador + elemento;
;
//nuestra funcion iniciara en 0
},0)

console.log(suma)