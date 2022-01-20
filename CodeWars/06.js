function well(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            sum += 1;
        }
    }
    if (sum === 0){
        return 'Fail!';
    } else if (sum < 3){
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));