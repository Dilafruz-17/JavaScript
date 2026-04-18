function pow(n){
    let arr = []

    for(let i = 0; i < n; i++){
        arr.push(2 ** i)
    }

    console.log(arr)
}
pow(5)