function sixToast(num) {
    if (num === 6) {
        return 0;
    } else {
        return Math.abs(num - 6);
    }
}

console.log(sixToast(6));
console.log(sixToast(17));
console.log(sixToast(3));