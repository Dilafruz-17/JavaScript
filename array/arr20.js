function betweenNum(n, k, l){
    let arr = []
    let sum = 0

    for(let i = k; i <= l; i++){
        arr.push(i)
        sum += i
    }

    console.log(sum)
}
betweenNum(10, 5, 8)