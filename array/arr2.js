function pow(n){

    let arr = []

    for(let i = 1; i < n; i++){
        arr.push(2 ** i)
    }
    console.log(arr)

}
pow(4)