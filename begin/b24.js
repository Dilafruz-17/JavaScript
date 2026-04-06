let a = 10;
let b = 20;
let c = 30;

if(a !== b && a !== c && c !== b){
    let temp = a;
    a = b;
    b = c;
    c = temp
}

console.log(`a ning qiymati ${a}`, `b ning qiymati ${b}`, `c ning qiymati ${c}`)