function oddNum(a) {
    let arr = []

    for (let i = 0; i < a; i++) {
        arr.push(i)
    }

    let filtered = arr.filter(i => i % 2 !== 0)

    console.log(filtered)
}
oddNum(10)