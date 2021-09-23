//fizz buzz

//multiplo de 3 fizz

//multiplo de 5 buzz

//multiplos de ambos fizz buzz


for(let i = 0;i < 100; i++ ){
    if(i % 5 == 0 && i % 3 == 0){
        console.log(`El ${i} fizz buzz`)
    }else if(i % 5 == 0){
        console.log(`El ${i} buzz`)
    }else if(i % 3 == 0){
        console.log(`El ${i} fizz`)
    }
}