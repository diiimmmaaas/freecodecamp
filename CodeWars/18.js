function enough(cap, on, wait) {
    let total = on + wait;
    if (total <= cap) {
        return 0;
    } else {
        return total - cap;
    }
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));