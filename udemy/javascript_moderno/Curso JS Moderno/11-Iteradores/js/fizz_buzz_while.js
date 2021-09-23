//fizz buzz

//multiplo de 3 fizz

//multiplo de 5 buzz

//multiplos de ambos fizz buzz


let i = 1

while(i <= 100){
    if(i % 5 == 0 && i % 3 ==0){
        console.log(`El ${i} es fizz buzz`)
    }else if(i % 3== 0){
        console.log(`El ${i} es fizz`)
    }else if(i % 5 == 0){
        console.log(`El ${i} es buzz`)
    }else{
        console.log(i)
    }
    i++
}