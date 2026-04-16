function geometrik(n){

    let arr = []
    let a1 = 2
    let q = 2
    let an = a1 * q ** (n -1)

    for(let i = a1; i <= an; i*=q){
        arr.push(i)
    }

    console.log(arr)
}
geometrik(10)