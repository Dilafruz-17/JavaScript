function Number(n){

    let arr = []

    for(let i = 0; i < n; i++){
        arr.push(i)
    }

    for(let i = 0; i < arr.length; i++){
        console.log(n - i)
    }

    console.log(arr)
}
Number(10)

//0 9 1 8 2