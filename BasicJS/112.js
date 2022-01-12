function rangeOfNumbers(startNum, endNum) {
    const arr = startNum < endNum ? rangeOfNumbers(startNum + 1, endNum) : [];

    arr.unshift(startNum);

    return arr
};

console.log(rangeOfNumbers(1, 5));