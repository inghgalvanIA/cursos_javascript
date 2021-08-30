/* existen dos tipos de alcance

alcance de funcion y alcance de bloque

funcion: alcance dentro de una sola funcion

var para usar en la variable de funcion va alcanzar por todo el alcanze de la funcion

let y const lo usan en el alcance de bloque 

*/

function hola(nombre){
    if(nombre){//inicio bloque
        var saludo = "Hola " + nombre;
        //let no puedes usarlo fuera de este bloque
    }//final del bloque
    console.log(saludo)
}

hola("Hector")