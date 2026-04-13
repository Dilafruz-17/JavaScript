function isPowerN(K, N){

    let result = "" 
   
    let num = K ** (1/N)

    if(num === K ** (1/N)){
        result = "true"
    } else{
        result = "false"
    }
 console.log(` ${K}soni ${num} sonining ${N} darajasi va natija: ${result}`)
}
isPowerN(25, 2)