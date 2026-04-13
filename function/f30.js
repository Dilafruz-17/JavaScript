function digitN(K,N){
    let str = K.toString()
    let result = 0
    if(str.length > N){
        for(let i = 1; i < str.length; i++){
            result = str[N]
        }
    } else{
        result = "-1"
    }

    console.log(`${K} sonining ${N}inchi raqami ${result} `)
}

digitN(93495, 0)