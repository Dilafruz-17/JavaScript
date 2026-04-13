function power2(a, b){

     
    if(b === 0){
        result = 1
    } else if(b > 0){
        result = a ** b

    } else{
        result = 1 / (a ** b)
    }

    console.log(`${a} ning ${b} darajasi ${result}`)
}
power2(2, 0)