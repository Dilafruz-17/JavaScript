function fibonachchi(n){
    let arr = []
    let f1 = 0;
    let f2 = 1
    for(let i = f1; i < n; i++){
        arr.push(i = f2 + f1)
    }

    console.log(arr)
}
fibonachchi(10)