function fact2(N){
 let sum = 1

    for(let i = 1; i <= N ; i+= 2){
        sum *= i
    }

    console.log(`${N}sonining factoriali ${sum}`)
}
fact2(5)