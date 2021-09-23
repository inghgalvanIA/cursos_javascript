const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobar si un valor exise en el arreglo


const resultado = meses.includes("Enero");
console.log(resultado)

//comprobr si un valor existe en objetos

const existe  = carrito.some((producto)=>{
    return producto.nombre === "Celular"
}
)

const existe_dos =meses.some(mes => mes === "Febrero");

console.log(`Aparece el celular ${existe}`)
console.log(`Aparece Febrero ${existe_dos}`)