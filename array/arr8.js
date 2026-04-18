function oddNumber(n) {
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(i)
    }

    let index = []

    for(let i = 0; i < arr.length; i++){
         if(i % 2 === 0){
            index.push(arr[i])
         }
    }

    console.log(index, `toq sonlar soni ${index.length}`)
}
oddNumber(10)