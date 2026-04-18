function oddNumber(n){
    let arr = []

    for(let i = 1; i <= n; i++){
        arr.push(i)
    }

    let filtered = arr.filter((i, index) =>index % 2 !== 0)
    let reversed = filtered.reverse()
    console.log(reversed)
}
oddNumber(11)
// 1 2 3 4 5 6 7 8 9 10 11
// 0 1 2 3 4 5 6 7 8 9  10
// 9