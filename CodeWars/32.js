function digitize(n) {
     let arr = String(n).split("").reverse().map(Number);
     return arr;

}

console.log(digitize(35231));