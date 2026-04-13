function SumRange(a, b){
    let sum = 0
    if(a < b){
        for(let i = 0; i < b; i++){
            sum += i
        }
    } else{
        sum = 0
    }

    console.log(`a va b sonlar orasidagi sonlar yigindisi ${sum}`)
}
SumRange(7, 10)