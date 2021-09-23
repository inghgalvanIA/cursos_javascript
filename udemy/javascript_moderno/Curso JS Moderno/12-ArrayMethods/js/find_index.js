const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//buscar el indice de  elemento del arreglo de forma manual
// meses.forEach((mes,i)=>{
//     if(mes === "Abril"){
//         console.log(`El mes ${mes} esta en la posicion ${i}`)
//     }

// })

//buscar el indice de elemento
const indice = meses.findIndex(mes => mes === "Abril");
console.log(`EL mes Abrile aparece en el ${indice}`)

const indice_dos  = carrito.findIndex(producto => producto.precio === 700);
console.log(indice_dos)