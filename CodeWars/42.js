var summation = function (num) {
    if (num <= 0) return 'The number will always be a positive integer greater than 0'
    let sum = 0
    for (let i = num; i > 0; i-- ) {
        sum += i
    }
    return sum
}


console.log(summation(8)) //=> 6