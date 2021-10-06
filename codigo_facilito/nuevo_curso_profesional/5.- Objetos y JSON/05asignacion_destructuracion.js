let user = {name: "Uriel", edad: 20 };

//let { llaves }  = objeto

let { name } = user;

//o 
// {variable: nuevo nombre} = objeto
let {edad: edad_} = user;

console.log(edad_);
console.log(name);