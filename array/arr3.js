function arifmetik(n){
    let a1 = 2;
    let d = 3
    let an = a1 + (n - 1) * d
    let arr = []

    for(let i = a1; i <= an; i+=d){
        arr.push(i)
    }

    console.log(arr)
}
arifmetik(5)