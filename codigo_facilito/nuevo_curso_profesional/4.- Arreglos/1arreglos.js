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

/*
El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no está presente.

El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

El método reverse() invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.

El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

La propiedad length de un objeto de tipo array establece o devuelve la cantidad de elementos en esa matriz. El valor es un entero que siempre es numéricamente mayor que el índice más alto en arreglo.


*/