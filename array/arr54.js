function EvenNumber(n){
    let aArray = []
    let bArray = []

    for(let i = 1; i < n; i++){
        aArray.push(i)
    }

    bArray = aArray.filter(i => i % 2 === 0)
    console.log(bArray)
}
EvenNumber(10)