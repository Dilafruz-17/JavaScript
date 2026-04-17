function addOddEven(n){

    let arrEven = []
    let arrOdd = []

    for(let i = 0; i < n; i++){
        arrEven.push(i)
    }

    for(let i = 0; i < n; i++){
        arrOdd.push(i)
    }

    let filteredEven = arrEven.filter(i => i % 2 === 0)
    let filteredOdd = arrOdd.filter(i => i % 2 !== 0)
    let addArrays = filteredEven.concat(filteredOdd)

    console.log(addArrays)
}
addOddEven(10)