function createMaxEl(n){
    let aArray = []
    let bArray = []
    let cArray = []
    let maxA = aArray[i];
    let maxB = bArray[i];

    for(let i = 0; i < n; i++){
        aArray.push(i)
        if(aArray[i] > maxA){
            maxA = aArray[i]
        }
    }

    for(let i = 4; i <= n; i++){
        bArray.push(i)
        if(bArray[i] > maxB){
            maxB = bArray[i]
        }
    }

    cArray = [maxA, maxB]



    console.log(cArray)
}
createMaxEl(10)