let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuestos(total){
    return total * 1.15;
}

total  = agregarCarrito(100);
total  = agregarCarrito(200);
total  = agregarCarrito(300);

const totalPagar = calcularImpuestos(total);

console.log(`El total a pagar es de ${totalPagar}`);

console.log(total)