function radToDeg(N){
    let gradus = N * (180 /Math.PI)

    console.log(`${N.toFixed(2)}radian - ${gradus.toFixed(2)}gradusga teng`)
}
radToDeg(3.14)