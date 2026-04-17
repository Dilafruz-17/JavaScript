function  evenNumber(n){
    let arr = []

    for(let i = 0; i <= n; i++){
        arr.push(i)
    }

    let filtered = arr.filter(i => i % 2 === 0)

    console.log(filtered)
}
evenNumber(10)

