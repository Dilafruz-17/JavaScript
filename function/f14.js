function ShiftRight3(a, b, c){
    let temp;
    temp = b;
    b = a;
    c = b;
    c = temp;




    console.log(`a = ${a}, b = ${b}, c = ${c}`)
}

ShiftRight3(2, 5, 7)