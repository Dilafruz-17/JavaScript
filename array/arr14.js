function addOddEven(n){

    let arrEven = []
    let arrOdd = []

    for(let i = 1; i <= n; i++){
        arrEven.push(i)
    }

    for(let i = 1; i <= n; i++){
        arrOdd.push(i)
    }

    let filteredEven = arrEven.filter((i, index) => index % 2 === 0)
    let filteredOdd = arrOdd.filter((i, index) => index % 2 !== 0)
    let addArrays = filteredEven.concat(filteredOdd)

    console.log(addArrays)
}
addOddEven(10)
 