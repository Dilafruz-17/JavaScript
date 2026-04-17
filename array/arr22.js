function sumNumbers(n, k, l){
    let arr = []
    
    

    for(let i = 1; i <= n; i++){
        arr.push(i)
    }

    
    let sliced = arr.slice(k, l) 
    let array = arr.splice(k, sliced, 0)


    console.log(array)
}
sumNumbers(10, 5, 8)