function dutyFree(normPrice, discount, hol) {
    return result = Math.floor(hol / (normPrice * (discount / 100)));
}

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));