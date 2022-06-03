function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}


console.log(isSquare(25))
console.log(isSquare(2))
console.log(isSquare(49))
console.log(isSquare(-1))
