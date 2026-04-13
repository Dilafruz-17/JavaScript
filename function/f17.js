function equation(a, b, c){

let D = b ** 2 - 4 * a * c;
let soni = ""
if(D > 0){
    soni = "2 ta"
} else if(D === 0){
    soni = " 1 ta"
} else{
    soni = "ildiz yoq"
}

    console.log(`The number of roots of the equation ${soni}`)
}

equation(1, 5, 6)