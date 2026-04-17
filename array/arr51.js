function exchange(n){
    let aArray = []
    let bArray = []
     
    for(let i = 1; i <= n; i++){
        aArray.push(i)
    }
    for(let i = n; i >= 1; i--){
        bArray.push(i)
    }

    let temp = aArray;
    aArray = bArray;
    bArray = temp

    console.log(aArray, bArray)
}
exchange(10)