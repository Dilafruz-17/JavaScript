let a = 15;
let b =15;

if(a !== b){
    if(a > b){
        b = a
    } else{
        a = b
    }
} else{
    a = 0;
    b = 0
}

console.log(a, b)