function ShiftRight3(a, b, c){
    let temp;
    temp = a;
    a = b;
    b = c;
    c = temp;
    console.log(`a = ${a}, b = ${b}, c = ${c}`)
}

ShiftRight3(2, 5, 7)