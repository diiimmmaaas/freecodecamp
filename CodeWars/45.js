function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduce(function (currentSum, currentNumber) {
        return (currentSum + currentNumber)
    }, 0)
    return sum / classPoints.length < yourPoints
}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))  // false
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))  // true
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))  // false
