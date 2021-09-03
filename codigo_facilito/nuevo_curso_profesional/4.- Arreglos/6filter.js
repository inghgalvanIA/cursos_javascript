/*

filtrar un arreglo dependiendo de alguna condicion

*/


let lenguajes = ["ruby","php","java","javascript"]

let nuevoArreglo = lenguajes.filter(function(lenguaje){
//solo se agregan los que sea true al nuevo arrgelo
    return lenguaje !== "ruby"
});
console.log(nuevoArreglo)