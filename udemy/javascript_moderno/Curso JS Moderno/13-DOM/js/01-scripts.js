titulo_header = document.querySelector(".contenido-hero  h1");
titulo_header.textContent = "hola desde Js"

cambio_h1 = document.querySelector("h1");
cambio_h1.style.backgroundColor = "red"

const enlace = document.createElement("a");
enlace.textContent = "Nuevo enlace";
enlace.href = "http:www.inghgalvan.xyz";
enlace.onclick = miFuncion;
console.log(enlace)

const navegacion = document.querySelector(".navegacion ");
navegacion.appendChild(enlace);

function miFuncion(){
alert("Diste click")
}