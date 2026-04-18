function evenNumber(n) {
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
 
    let filtered = arr.filter((i, index) => index % 2 === 0)

    let reversed = filtered.reverse()

    console.log(reversed, `juft sonlar soni ${filtered.length}`)
}
evenNumber(10)