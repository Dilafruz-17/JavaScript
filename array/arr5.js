function fibonachchi(n){
    let arr = []

    for(let i = 0; i < n; i++){
        arr.push(i)
    }

    let index = []

    for(let k = 2; k < arr.length; k++){
        index.push(arr[k] = arr[k - 1] + arr[k - 2])
    }

    console.log(index)
     
}
fibonachchi(10)