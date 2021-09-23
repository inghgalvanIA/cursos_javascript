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

    producto_uno.infoMensaje();