function invertDigit(a){

    let arr = a.toString().split('').reverse().join()
    return arr
}

let result = invertDigit(34)
console.log(result)