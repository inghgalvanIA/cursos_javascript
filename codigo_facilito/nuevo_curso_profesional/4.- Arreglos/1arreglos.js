/*
un arreglo es un coleccion de datos agrupados en una sola estructura

un arreglo es

let nombre_arreglo = [datos

-pueden almacenar cualquier tipo de dato de primera clase, funciones, obejtosm numeros, cadenas, booleanos e incluso arreglos]
-Una d elas propiedades d elos arreglos es su longitud la longitud es igual a la cantidad de elementos dentro del arreglo.
-las posiciones de los elemntos inician a contar desde 0, de manera que el primer elemento del arreglo tiene como index 0
. la ultima posicion del arreglo es igual a la longitus del arreglo, menos uno,ese menos uno responde al hecho de que la cuenta inicia en 0
*/

let calificaciones = [10,9,8,7,9];

console.log(calificaciones)

//ejemplo si queremos ir al dato d ela segunda posicion

console.log(calificaciones[1])

//agregar un valor al final del arreglo

calificaciones.push("Nuevo_dato")

console.log(calificaciones)

//agregar un valor al inicio del arreglo

calificaciones.unshift(3)

console.log(calificaciones)

//quitar el ultimo valor del arreglo

calificaciones.pop();

console.log(calificaciones)

//quitar el primer valor del arreglo

calificaciones.shift();

console.log(calificaciones)

//si almacenamos en una variable el metodo pop o shift se le asignara el elemento eliminado

eliminado_pop = calificaciones.pop();
console.log(eliminado_pop)