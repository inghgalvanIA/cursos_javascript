//convertir string a enteros

numero1 = "25";
numero2 = "20.2";

//para saber el tipo de dato de una variable
console.log(typeof(numero1));

//conevertir un string a numero
numero1 = Number.parseInt(numero1);
console.log(typeof(numero1));

//convertir a flotante
numero2 = Number.parseFloat(numero2);
console.log(typeof(numero2));

//para saber si un numero es entero
console.log(Number.isInteger(numero1));