function isDevision(n, k){
    let arr = []
 
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    let filtered = arr.filter(num => num % k === 0)
     
    console.log(filtered)
}
isDevision(10, 2)