function EvenNumber(n){
    let aArray = []
    let bArray = []

    for(let i = 1; i < n; i++){
        aArray.push(i)
    }

    bArray = aArray.filter(i => i % 3 === 0)
    console.log(bArray, bArray.length)
}
EvenNumber(10)