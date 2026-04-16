function addOddEven(n) {
    let arrEven = []
    let arrOdd = []

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arrEven.push(i)
        }
    }


    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            arrOdd.push(i)
        }
    }

    let reversed = arrOdd.reverse()

    let addArr = arrEven.concat(reversed)

    console.log(addArr)
}
addOddEven(10)