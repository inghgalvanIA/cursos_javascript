let lista = [10,20,3,4,2,7,6,4,3,90]


function par_impar(lista){
    var lista_pares = []
    var lista_impares = []
    for(let i = 0;i < lista.length; i++){
        if(lista[i] % 2 == 0) {
        lista_pares.unshift(lista[i]);
        }else {
        lista_impares.unshift(lista[i]);
        }
    }

    console.log(lista_pares)
    console.log(lista_impares)

}

par_impar(lista);