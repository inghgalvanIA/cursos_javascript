//Javascript Object Notation -> JSON

let curso = {
    titulo: "Curso profesional de JS",
    formato: "video",
    bloques: ["Introduccion","funciones"],
    inscribir: function(){
        console.log("Inscrito")
    }
}

console.log(curso.titulo);

curso.inscribir();

curso.titulo = "Curso de rubi";
curso["inscribir"] = function(){console.log("Inscribir v2");}


console.log(curso.titulo);

curso.inscribir();