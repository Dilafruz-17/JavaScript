function arifmetik(n, k, l){
    let arr = []
    let sum = 0
    let count = 0

    for(let i = k; i <= l; i++){
        arr.push(i)
        count += 1
        sum += i
    }

    let arif = sum / count

    console.log(arif)
}
arifmetik(10, 5, 8)
 