function ShiftRight3(a, b, c){
    let temp;
    temp = c;
    c = b;
    b = a;
    a = temp;
    console.log(`a = ${a}, b = ${b}, c = ${c}`)
}

ShiftRight3(2, 5, 7)