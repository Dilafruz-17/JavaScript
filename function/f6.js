function DigitCountSum(num){

  let str = num.toString()
  let sum = 0

  for(let i = 0; i < str.length; i++){
    sum += parseInt(str[i])
  }


  console.log(`sonlar soni ${str.length}`)
  console.log(`sonlar yigiindisi ${sum}`)
}

DigitCountSum(102)
   
