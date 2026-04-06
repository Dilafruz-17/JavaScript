let a = 30;
let b = 25;
let c = 20;

let max;
let mid;
let min;

if(a > b){
    max = a
} else{
    max = b
}

if(c > max){
    max = c
}

if(a < b){
    min = a
} else{
    min = b
}

if(c < min){
    min = c
}

mid = (a + b + c) - (min + max)

if(a == min && b == mid && c == max || a == max && b == mid && c == min){
    a = a * 2
    b = b * 2
    c = c * 2
} else {
    a = a * (-1)
    b = b * (-1)
    c = c * (-1)
}

console.log(a, b, c)