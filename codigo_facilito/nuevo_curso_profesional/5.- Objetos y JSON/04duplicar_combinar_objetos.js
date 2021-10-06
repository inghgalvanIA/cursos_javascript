let user = {
    edad:20,
    nombre:"Uriel"
}

let esquemaPermisos = { nivel:2}
//duplicar un objeto

let copia = {...user,...esquemaPermisos};


//en el nuevo arreglo s epuede remplazar un elemeno poniendolo a la derecha

let copia_dos = {...user,...esquemaPermisos,nombre: "Cody"};
console.log(copia)
console.log(copia_dos)