carrito = [
    {nombre: "Autoestereo",precio: 250},
    {nombre: "Monitor",precio: 300},
    {nombre: "teclado",precio: 150},
    {nombre: "cpu",precio: 50},

]

let nuevo_arreglo = carrito.forEach(function(aparato){
console.log(`El ${aparato.nombre} precio: ${aparato.precio}`)
})

let nuevo_arreglo2 = carrito.map(function(aparato){
    console.log(`El ${aparato.nombre} precio: ${aparato.precio}`)
    })