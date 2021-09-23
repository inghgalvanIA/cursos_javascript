const pendientes = ["tarea","comer","proyecto","Estudiar JS"];

pendientes.forEach((pendiente,indice) => {
    console.log(`${indice}: ${pendiente} `)

})

const nuevo_arreglo = pendientes.map(pendiente=>console.log(pendiente + "hola"))



console.log(nuevo_arreglo)