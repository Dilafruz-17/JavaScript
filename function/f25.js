function isSquare(K){

    let result = "" 

    let sum = K ** 0.5
    if(sum === K ** 0.5){
        result = "true"
    } else{
        result = "false"
    }

    console.log(`it is square of ${sum} and result is ${result}`)
}
isSquare(25)