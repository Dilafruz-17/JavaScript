function oddNumber(n){
let arr = []
let count = 0

for(let i = 0; i < n; i++){
    if(i % 2 !== 0){
        arr.push(i)
        count += 1
    }
    
}

console.log(count, arr)
}
oddNumber(10)