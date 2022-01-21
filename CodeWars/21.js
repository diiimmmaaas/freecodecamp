function remainder(a, b) {
    if ( a > b){
        return a % b;
    } else {
        return b % a;
    }
    

}


console.log(remainder(17,5));
console.log(remainder(13, 72));
console.log(remainder(1, 0));