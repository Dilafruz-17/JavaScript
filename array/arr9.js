function evenNumber(n) {
    let arr = []
    let count = 0
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arr.push(i)
            count += 1
        }

    }
    let reversed = arr.reverse()

    console.log(count, reversed)
}
evenNumber(10)