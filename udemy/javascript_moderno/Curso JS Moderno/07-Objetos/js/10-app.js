const producto_uno = {
    nombre:"Monitor de 24 pulgadas",
    precio:300,
    disponible:true,
    informacion:{
        peso : "1Kg",
        altura : "1m"
    }
    }

const medidas = {
    peso: "1Kg",
    altura: "1M"
}

resultado = Object.assign(producto_uno,medidas);
resultado_dos = {...producto_uno,...medidas};

console.log(resultado)
console.log(resultado_dos)