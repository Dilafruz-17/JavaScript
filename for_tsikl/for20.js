 

 

let n = 4;
let S = 0;
 
for (let i = 1; i <= n; i++) {

    let result = 1
    

    for (let a = 1; a <= i; a++) {
        result *= a
    }

    S += result
}

console.log(S)


 