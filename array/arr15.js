function addEvenOdd(n){

    let arrOdd = []
    let arrEven = []
     
    for(let i = 0; i < n; i++){
        arrOdd.push(i)
    }

    for(let i = 0; i < n; i++){
        arrEven.push(i)
    }

    let filteredOdd = arrOdd.filter(i => i % 2 !== 0)
    let filteredEven = arrEven.filter(i => i % 2 === 0)

    let reversedEven = filteredEven.reverse()

    let add = filteredOdd.concat(reversedEven)

    console.log(add)
}
addEvenOdd(10)