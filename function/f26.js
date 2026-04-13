function isPower5(K){

    let result = "" 

    let sum = K ** 0.2
    if(sum === K ** 0.2){
        result = "true"
    } else{
        result = "false"
    }

    console.log(`it is square of ${sum} and result is ${result}`)
}
isPower5(12)