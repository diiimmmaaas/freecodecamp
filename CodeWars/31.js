function pillars(num_pill, dist, width) {
    if (num_pill > 1) {
        let distance = 100 * dist * (num_pill - 1) + width * (num_pill - 2)
        return distance;
    } else {
        return 0;
    }
}

console.log(pillars(11, 15, 30));
console.log(pillars(2, 20, 25));
console.log(pillars(1, 10, 10));
