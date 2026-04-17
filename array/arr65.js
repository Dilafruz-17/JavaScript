function kGaOrttirish(n){
    let arr = []
    let k = 2

    for(let i = 1; i < n; i++){
        arr.push(i)
    }

    let newArr = arr.map(i => i * k)

    console.log(newArr)
}
kGaOrttirish(10)