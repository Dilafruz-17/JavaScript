function Triangle(a){
    P = 3 * a
    S = (3 ** 0.5 / 4) * a ** 2
    return [ P, S]
}

let result = Triangle(4)
console.log(result)