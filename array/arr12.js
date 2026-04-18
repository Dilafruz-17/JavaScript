function evenNumber(n) {
    let arr = []

    for (let i = 3; i <= n; i++) {
        arr.push(i)
    }

    let filtered = arr.filter((i, index) => index % 2 === 0);

    console.log(filtered)
}
evenNumber(10)

 