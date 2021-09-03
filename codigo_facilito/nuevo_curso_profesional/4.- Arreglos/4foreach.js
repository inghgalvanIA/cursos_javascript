/* foreach
metodo para recorrer un arreglo


*/

let lenguajes = ["ruby","php","javascript","python"];

/*
la forma tradicional de recorrer el programa seria

for(let i = 0;i < lengajes; i++){
console.log(lenguajes[i])
}
*/

//nombre_arreglo.foreach(function(variable_asignar,indice,arreglo){
// codigo a relaizar
//})
lenguajes.forEach(function(lenguaje,indice,arreglo){
    console.log(lenguaje,indice,arreglo)
});
