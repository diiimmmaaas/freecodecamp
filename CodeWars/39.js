function squareDigits(num) {
    return +num.toString().split('').map(n => +(n) * +(n)).join('')
}

console.log(squareDigits(3232))  // => 9494