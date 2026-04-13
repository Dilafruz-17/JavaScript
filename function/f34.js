function fact(N){

    let sum = 1

    for(let i = 1; i <= N ; i++){
        sum *= i
    }

    console.log(`${N}sonining factoriali ${sum}`)
}
fact(5)