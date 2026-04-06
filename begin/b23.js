let a = 10;
let b = 20;
let c = 30;

if(a !== b && a !== c && c !== b){
    let temp = a;
    a = c;
    c = b;
    b = temp
}

console.log(a, b, c)