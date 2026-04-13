function isPalindrom(N){
    let str = N.toString().split('').join()
    let rev = N.toString().split('').reverse().join()
    let result = ""

    if(str === rev){
        result = "true"
    } else{
        result = "false"
    }
    
    console.log(`${N} is Palindrom and result is:${result}`)
}
isPalindrom(202)