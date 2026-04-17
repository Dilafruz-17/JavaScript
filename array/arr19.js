function Number(n){

    let arr = []
    for(let i = 1; i < n; i++){
        arr.push(i)
    }

    let num = arr.find(i => i < n && i > arr[0])
     
    if(num !== undefined){
        console.log(num)
    } else{
        console.log(0)
    }
}
Number(10)