function Arrays(n){
    let aArray = []
    let bArray = [];

    for(let i = 1; i <= n; i++){
        aArray.push(i)
         

    if(i < 5){
        bArray.push(2 * i)
    } else{
        bArray.push(i / 2)
    }
    }

    console.log(bArray)
}
Arrays(10)