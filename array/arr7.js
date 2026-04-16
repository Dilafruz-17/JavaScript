function reversed(n){
    let arr = []

    for(let i = 0; i < n; i++){
        arr.push(i)
    }

    let reversedArr = arr.reverse()

    console.log(reversedArr)
}
reversed(10)