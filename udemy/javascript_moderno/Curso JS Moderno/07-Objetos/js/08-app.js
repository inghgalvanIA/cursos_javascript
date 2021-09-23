const producto_uno = {
    nombre:"Monitor de 24 pulgadas",
    precio:300,
    disponible:true,
    informacion:{
        peso : "1Kg",
        altura : "1m"
    }
    }
//fezear un objeto para que no se pueda editar, eliminar o agreagr valores

Object.freeze( producto_uno )

producto_uno.precio = 400;

console.log(producto_uno)