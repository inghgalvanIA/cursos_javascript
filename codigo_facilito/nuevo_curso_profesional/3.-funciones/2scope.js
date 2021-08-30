/* scope
las reglas que definen en donde una variable esta disponible y donde no

scope global: variables alcanzadas por todaslas funciones o objetos
esta se declara fuera de una funcion 

scope local: variables declaradas dentro de una funcion 

2 o mas pueden compartir el mimso nombre siempre y cuando nno compartan el mismo alcance

*/
//variable global
var nombre = "Hector";

console.log(nombre);

function decirHola(nombre){
    //local
    nombre = "Cody"
    console.log("hola " + nombre)
}


decirHola(nombre);

