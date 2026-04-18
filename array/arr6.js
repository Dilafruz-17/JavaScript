function fibonachchi(n){
    let arr = []

    for(let i = 0; i < n; i++){
        arr.push(i)
    }

    let index = []

    for(let i = 2; i < arr.length; i++){
        index.push(arr[i] = arr[i - 1] + arr[i - 2])
    }


    console.log(arr)
}
fibonachchi(10)