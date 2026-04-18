function addOddEven(n) {
    let arrEven = []
    let arrOdd = []

    for (let i = 0; i < n; i++) {
        arrEven.push(i)
    }


    for (let i = 0; i < n; i++) {
        arrOdd.push(i)
    }
 
    let filteredEven = arrEven.filter((num, index) => index % 2 === 0)
    let filteredOdd = arrOdd.filter((num, index) => index % 2 !== 0)

    let reversed = filteredOdd.reverse()

    let addArr = filteredEven.concat(reversed)

    console.log(addArr)
}
addOddEven(10)