//unir 2 arreglos

let meses = ["Enero","Febrero","Marzo","Abril","Mayo"];
let meses2 = ["Junio","Julio","Agosto"];
//con concat
let meses3 = meses.concat(meses2);

console.log(meses3)

//con spread operator
let resultado = [...meses,...meses2];
console.log(resultado)