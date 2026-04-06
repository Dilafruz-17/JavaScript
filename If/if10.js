let a = 1;
let b = 11;

if(a !== b){
    a = a + b;
    b = a + b;
} else{
    a = 0;
    b = 0;
}

console.log(a, b)