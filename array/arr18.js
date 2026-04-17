function findMin(n){
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }

    let min = arr.find(i => i < n )

    if(min !== undefined){
        console.log(min)
    } else{
        console.log(0)
    }

     
}
findMin(10)
