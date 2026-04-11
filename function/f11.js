function Minmax(X, Y){

    let max;
    let min;
    let temp

    if(X < Y){
        min = X
        max = Y
    } else{
        temp = X;
        X = Y;
        Y = temp
        min = X
        max = Y
    }

   

    console.log(`X: ${min} Y: ${max}`)
}

Minmax(290, 10)