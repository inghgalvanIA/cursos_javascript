//nos permiten evaluar valores o exprexiones por su valor booleano obteniendo un resultado booleano

/*
&& el operador AND
|| el operador OR
! le operador de negacion es NOT
?? el operador nullish coalesing -- fusion de nulos

a diferencias de otros lenguajes encaso de ser falso retornara el primer valor falsy
*/

//si todos los valores son verdaderos

var resultado = true && 1;

var resultado_dos = true && 0

console.log(resultado)
console.log(resultado_dos)
console.log(true && true)

//cuando and no encuentra un valor falso regresa el ultimo valor truthly , si encuentra un valor falso regresa el ultimo falsoº
console.log(20 && 10)
console.log(0 && True && False)