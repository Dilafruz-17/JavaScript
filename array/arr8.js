function oddNumber(n) {
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(i)
    }

    let filtered = arr.filter((i, index) => index % 2 !== 0)

    console.log(filtered, `toq sonlar soni ${filtered.length}`)
}
oddNumber(10)