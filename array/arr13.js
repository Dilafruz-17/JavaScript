function oddNumber(n){
    let arr = []

    for(let i = 1; i < n; i++){
        arr.push(i)
    }

    let filtered = arr.filter(i =>i % 2 !== 0)

    console.log(filtered)
}
oddNumber(10)
// 0 1 2 3 4 5 6 7 8 9
// 