function power1(a, b){

    let result = a ** b
    console.log(`${a} ning ${b} darajasi ${result}`)
}
power1(2, 3)

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


function power3(a, b){

     
    if(b !== 0){
        power1()
    } else if(b > 0){
        power2()
    } 

    console.log(`${a} ning ${b} darajasi ${result}`)
}
power3(2, 0)