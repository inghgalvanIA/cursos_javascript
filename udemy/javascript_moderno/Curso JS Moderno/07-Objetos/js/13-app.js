const producto_uno = {
    nombre:"Monitor de 24 pulgadas",
    precio:300,
    disponible:true,
    informacion:{
        peso : "1Kg",
        altura : "1m"
    },
    infoMensaje: function(){
        console.log (`El producto ${this.nombre} tiene un precio de ${this.precio}`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    }

    }
//obtener las llaves de un objeto
console.log(Object.keys(producto_uno));

//obtener los valores de los objetos
console.log(Object.values(producto_uno));

//obtenet todos los datos del objeto
console.log(Object.entries(producto_uno));

