/* una funcion es un conjunto de instrucciones que se llevan a cabo cuando se manda llamar una funcion

function nnombre_funcion(){}

Expresion de funcion en este caso el nombre es opcional (funcion anonima)


let func = function nombre_funcion(){}

mandar llamar la funcion

nombre_funcio(Argumentos);

*/

function cuadrado(numero){
    return numero * numero;
}

let res_cuadrado = cuadrado(2);
console.log(res_cuadrado)