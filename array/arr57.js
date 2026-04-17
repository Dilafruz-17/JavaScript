function EvenNumber(n){
    let aArray = []
    let bArray = []

    for(let i = 1; i < n; i++){
        aArray.push(i)
    }

    let odd = aArray.filter(i => i % 2 !== 0)
    let even = aArray.filter(i => i % 2 === 0)
    bArray = even.concat(odd)

    console.log(bArray, bArray.length)
}
EvenNumber(10)