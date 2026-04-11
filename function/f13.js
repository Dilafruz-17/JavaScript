function SortInc(a, b, c){
    let min;
    let mid;
    let max;
    

    if(a > b){
        max = a
    } else{
        max = b
    }

    if(c > max){
        max = c
    }

    if(a < b){
        min = a
    } else{
        min = b
    }

    if(c < min){
        min = c
    }

    mid = (a + b + c) - (max + min)

    console.log(max, mid, min)
}

SortInc(6, 5, 9)