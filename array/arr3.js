//n natural soni va arifmetik progressiyaning dastlabki hadi
//A va ayirma D berilgan. Arifmetik progressiyaning dastlabki n ta hdidian tashkil topgan massivni hosil qiling va elementlarni chiqaring

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
arifmetik(10)