//object constructor

function producto(nombre,precio) {
 this.nombre = nombre;
 this.precio = precio;
 this.disponible = true;
}

const producto2 = new producto("Autoesteroe",250);
console.log(producto2)