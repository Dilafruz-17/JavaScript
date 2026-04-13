function Even(K){
    let num = ""

    if(K % 2 === 0){
        num = "even"
    } else{
        num = "odd"
    }



    console.log( `this number is ${num}`)
}
Even(10)