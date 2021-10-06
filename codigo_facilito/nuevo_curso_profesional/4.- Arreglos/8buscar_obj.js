let arreglo = ["ruby","python","js","java"];

//indexof -> === ->posicion
//busca un objeto dentro del arreglo y regresa el indice 
//si no se encuntre regresa un -1
console.log(arreglo.indexOf("python"));

//includes -> === -> true!False
//si solo quieres saber si exite el arreglo 
//sise agrega un segundo elemento en el parentesis describes desde que posicion iniciara a buscar
console.log(arreglo.includes("ruby"))


//find -> funcion prueba -> eñlemento encontrado

let respuesta = arreglo.find(function(elemento,posicion,arreglo){
    return elemento === "ruby";
})

console.log(respuesta)


//find -> funcion prueba -> posicion

let respuesta_ = arreglo.findIndex(function(elemento,posicion,arreglo){
    return elemento === "ruby";
})



//some -> funcion prueba -> true_false


let respuesta_uno = arreglo.some(function(elemento,posicion,arreglo){
    return elemento === "ruby";
})


console.log(respuesta)
console.log(respuesta_)
console.log(respuesta_uno)