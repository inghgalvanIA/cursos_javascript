//`

const reproductor = {
    cancion: "",
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:() => console.log("pausando..."),
    borrar: id => console.log(`borrando cancion --${id}`),
    crearPlayList: nombre => console.log(`reproducionedo la playlist ${nombre}`),
    reproducirPlaylist: nombre => console(`Reproducimiendo la playlista ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
