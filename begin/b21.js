let x1 = 10;
let x2 = 15;
let x3 = 35
let y1 = 20;
let y2 = 25;
let y3 = 30

let a = (  Math.abs((x2 - x1)) ** 2 + Math.abs((y2 - y1)) ** 2 ) ** 0.5
let b = ( Math.abs((x3 - x2)) ** 2 + Math.abs((y3 - y2)) ** 2 ) ** 0.5
let c = ( Math.abs((x1 - x3)) ** 2 + Math.abs((y1 - y3)) ** 2 ) ** 0.5

let p = (a + b + c) / 2
let S = (p * (p - a) * (p - b) * (p - c)) ** 0.5
 

console.log(S, p)