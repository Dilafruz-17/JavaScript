let S = 0;
let count = 1;
for(let n = 1.1; n < 15; n+= 0.1){
    if( count % 2 === 1){
        S += n
    } else{
        S += (-n)
    }
    count++
}

console.log(S)

 