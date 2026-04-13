function findSign(num){

    let sign = " "

    if(num > 0){
        sign = "+"
    }else if(num === 0){
        sign = 0
    } else{
        sign = "-"
    }

    console.log(`sonning ishorasi ${sign}`)
}
findSign(-6)